import express from 'express';
const router = express.Router();
import authenticate from './controller/controller.js';

router.post('/', authenticate);

export default router;