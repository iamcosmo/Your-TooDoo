import mongoose from 'mongoose';
import UserDataModel from './userModel';

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
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDataModel',
        required: true, 
    },
}, {
    timestamps: true 
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
