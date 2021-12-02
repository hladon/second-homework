import express from 'express';
const router=express.Router();
import getById from './controller/getById.js';
import create from './controller/create.js';
import getWithParams from './controller/getWithParams.js';
import update from './controller/update.js';
import remove from './controller/remove.js';

router.get('/', getById);
router.get('/suggest', getWithParams);
router.post('/', create);
router.put('/', update);
router.delete('/', remove);
export default router;
