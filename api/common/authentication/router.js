import express from 'express';
const router = express.Router();
import authenticate from './authenticate.js';

router.post('/', authenticate);

export default router;
