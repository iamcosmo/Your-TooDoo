import express from "express";
import {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
} from '../controllers/todoController.js';

const todoRouter = express.Router();

todoRouter.post('/', createTodo);
todoRouter.get('/', getTodos);
todoRouter.get('/:id', getTodoById);
todoRouter.patch('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);

export default todoRouter;
