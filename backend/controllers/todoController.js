import Todo from '../models/todoModel.js';
import UserDataModel from '../models/userModel.js';

// Create a new todo
export const createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            user_id: req.user._id
        });
        return res.status(201).json({data:newTodo,message:'created'});
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Get all todos
export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find().populate('user_id'); 
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a todo by ID
export const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id).populate('user_id');
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a todo by ID
export const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } 
        ).populate('user_id');
        
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a todo by ID
export const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(204).send(); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

