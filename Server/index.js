import express from 'express';
import mongoose from 'mongoose';
import router from './routes/blogs.js';

const app = express();

app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true }));

app.use('/api',router);


const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`server is running on Port ${PORT}`))

