import express from 'express';
const router = express.Router();
import userRouter from './user/router.js';
import groupRouter from './group/router.js';
import loginRouter from './authentication/controller/controller.js'

router.use('/user', userRouter);
router.use('/group', groupRouter);
router.post('/', loginRouter);

export default router;