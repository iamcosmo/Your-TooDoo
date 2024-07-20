import express from "express";
import {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
} from '../controllers/todoController.js';
import { authMiddleware } from "../middlewares/authMiddlewares.js";


const todoRouter = express.Router();

todoRouter.post('/',authMiddleware, createTodo);
todoRouter.get('/',authMiddleware, getTodos);
todoRouter.get('/:id', authMiddleware,getTodoById);
todoRouter.patch('/:id', authMiddleware,updateTodo);
todoRouter.delete('/:id',authMiddleware, deleteTodo);

export default todoRouter;
