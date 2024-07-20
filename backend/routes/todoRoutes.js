import express from 'express';
import {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
} from '../controllers/todoController.js';

const router = express.Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodoById);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
