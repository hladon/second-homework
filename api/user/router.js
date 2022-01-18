import express from 'express';
import authenticateToken from '../../lib/middleware/authentikate/index.js'
import getById from './controller/getById.js';
import create from './controller/create.js';
import getWithParams from './controller/getWithParams.js';
import update from './controller/update.js';
import remove from './controller/remove.js';
const router = express.Router().use(authenticateToken);

router.get('/', getById);
router.get('/suggest', getWithParams);
router.post('/', create);
router.put('/', update);
router.delete('/', remove);
export default router;