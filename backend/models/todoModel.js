import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: 'pending',
    },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
