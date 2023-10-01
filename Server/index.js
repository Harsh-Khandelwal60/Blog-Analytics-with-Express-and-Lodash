import express from 'express';

import router from './routes/blogs.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true }));

app.use('/api',router);


const PORT = process.env.PORT || 5000;




app.listen(PORT , () => console.log(`server running on port ${PORT}`))


