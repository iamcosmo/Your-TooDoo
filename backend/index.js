import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import todoRouter from './routes/todoRoutes.js';
import authRouter from './routes/authRoutes.js';


dotenv.config();

console.log('mongo url = ',process.env.MONGO_URI);

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/auth',authRouter)
app.use('/todos', todoRouter);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export {app,server};
