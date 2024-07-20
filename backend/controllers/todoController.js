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
        console.log('users todos requested',req.user);
        const todos = await Todo.find({ user_id: req.user._id })//.populate('user_id');
        return res.status(200).json({data:todos,message:'A List of Todos'});
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};



// Update a todo by ID
export const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } 
        )
        
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        return res.status(200).json({updated:updatedTodo,message:'The todo was updated'});
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Delete a todo by ID
export const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
       return res.status(204).send({message:'Deleted'}); 
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

