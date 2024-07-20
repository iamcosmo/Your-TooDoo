import request from 'supertest';
import app from '../index.js';
import mongoose from 'mongoose';

describe('Todo API', function () {
  let token;

  beforeAll(async function () {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    // Sign up and login to get a token
    const res = await request(app)
      .post('/auth/signup')
      .send({ name: 'chandan', username: 'cosmos', password: 'Hellya11#' });
    
    const loginRes = await request(app)
      .post('/auth/login')
      .send({ username: 'cosmos', password: 'Hellya11#' });

    token = loginRes.body.token;
  });

  afterAll(async function () {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  describe('POST /todos', function () {
    it('should create a new todo', async function () {
      const res = await request(app)
        .post('/todos')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Test Todo', description: 'Test Description', status: 'pending' });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('data');
      expect(res.body.message).toBe('created');
    });
  });

  describe('GET /todos', function () {
    it('should get all todos for the user', async function () {
      const res = await request(app)
        .get('/todos')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('data');
      expect(res.body.message).toBe('success');
    });
  });

  describe('PATCH /todos/:id', function () {
    let todoId;

    beforeAll(async function () {
      const todoRes = await request(app)
        .post('/todos')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Todo to Update', description: 'Update Test', status: 'pending' });

      todoId = todoRes.body.data._id;
    });

    it('should update a todo', async function () {
      const res = await request(app)
        .patch(`/todos/${todoId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Updated Todo' });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('title', 'Updated Todo');
    });
  });

  describe('DELETE /todos/:id', function () {
    let todoId;

    beforeAll(async function () {
      const todoRes = await request(app)
        .post('/todos')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Todo to Delete', description: 'Delete Test', status: 'pending' });

      todoId = todoRes.body.data._id;
    });

    it('should delete a todo', async function () {
      const res = await request(app)
        .delete(`/todos/${todoId}`)
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(204);
    });
  });
});
