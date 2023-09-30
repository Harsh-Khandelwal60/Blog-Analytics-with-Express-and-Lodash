import express, { Router } from 'express';
import { middleware1 } from '../Controllers/index.js';


const router = express.Router();


router.get('/blog-stats',middleware1);


export default router;