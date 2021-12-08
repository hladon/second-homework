import express from 'express';
const router = express.Router();
import userRouter from './user/router.js';
import groupRouter from './group/router.js';

router.use('/user', userRouter);
router.use('/group', groupRouter);

export default router;
