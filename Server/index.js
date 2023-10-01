import express from 'express';

import router from './routes/blogs.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true }));

app.use('/api',router);


const PORT = process.env.PORT || 5000;

const CONNECTION_URL="mongodb+srv://khandelwalharsh121:iifRmrvuBehv6H2X@cluster0.alkubuu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT , () => console.log(`server running on port ${PORT}`)))
.catch((err) => console.log(err.message));

