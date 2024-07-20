import express from "express";
import {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
} from '../controllers/todoController.js';
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const todoRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - status
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the todo
 *         description:
 *           type: string
 *           description: The description of the todo
 *         status:
 *           type: string
 *           description: The status of the todo
 *         user_id:
 *           type: string
 *           description: The user linked with this todo
 *       example:
 *         title: Test Todo
 *         description: Test Description
 *         status: pending
 *         user_id: 699b72340f4851a394373bdf4
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 */

todoRouter.post('/', authMiddleware, createTodo);

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos for the user
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 */

todoRouter.get('/', authMiddleware, getTodos);

/**
 * @swagger
 * /todos/{id}:
 *   patch:
 *     summary: Update a todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The todo was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 *       500:
 *         description: Some server error
 */

todoRouter.patch('/:id', authMiddleware, updateTodo);

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the todo
 *     responses:
 *       204:
 *         description: The todo was deleted successfully
 *       404:
 *         description: The todo was not found
 *       500:
 *         description: Some server error
 */

todoRouter.delete('/:id', authMiddleware, deleteTodo);

export default todoRouter;
