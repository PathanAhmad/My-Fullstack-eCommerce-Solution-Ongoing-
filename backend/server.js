import express from 'express';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import productRoutes from './routes/productRoutes.js'

connectDB();

const app = express();

app.use(cors());

const port = process.env.port || 5000;



app.get('/', (req,res) => {
    res.send('API is running...')
});

app.use('/api/products', productRoutes)


app.use(notFound);
app.use(errorHandler);  


app.listen(port, () => console.log(`Server running on port ${port}`))