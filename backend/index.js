import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
