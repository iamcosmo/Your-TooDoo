import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';
import Todo from '../models/todoModel.js';

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

beforeEach(async () => {
    await Todo.deleteMany({});
});

describe('Todo API', () => {
    it('should create a new todo', async () => {
        const res = await request(app)
            .post('/todos')
            .send({
                title: 'Test Todo',
                description: 'Test Description',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });

    it('should fetch all todos', async () => {
        const res = await request(app).get('/todos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(0);
    });

    it('should fetch a single todo by ID', async () => {
        const todo = new Todo({
            title: 'Test Todo',
            description: 'Test Description',
        });
        await todo.save();

        const res = await request(app).get(`/todos/${todo._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id', todo._id.toString());
    });

    it('should update a todo', async () => {
        const todo = new Todo({
            title: 'Test Todo',
            description: 'Test Description',
        });
        await todo.save();

        const res = await request(app)
            .patch(`/todos/${todo._id}`)
            .send({ status: 'completed' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'completed');
    });

    it('should delete a todo', async () => {
        const todo = new Todo({
            title: 'Test Todo',
            description: 'Test Description',
        });
        await todo.save();

        const res = await request(app).delete(`/todos/${todo._id}`);
        expect(res.statusCode).toEqual(200);
    });
});
