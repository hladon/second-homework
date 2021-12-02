import express from 'express';
const router=express.Router();
import getById from './controller/getById.js';
import create from './controller/create.js';
import getAll from './controller/getAll.js';
import update from './controller/update.js';
import remove from './controller/remove.js';
import addUserToGroup from './controller/addUserToGroup.js'

router.get('/', getById);
router.get('/all', getAll);
router.get('/add',addUserToGroup);
router.post('/', create);
router.put('/', update);
router.delete('/', remove);
export default router;
