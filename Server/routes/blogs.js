import express, { Router } from 'express';
import { middleware1 , fetchData } from '../Controllers/index.js';

const router = express.Router();


router.get('/blog-stats',middleware1 , fetchData);


export default router;