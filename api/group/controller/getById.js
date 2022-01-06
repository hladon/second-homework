import Joi from 'joi';
import findById from '../service/getById.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    id: Joi.number().integer().min(0)
})

const getById = requestHandler('Get by id - Group API', schema, async(req, res, next) => {
    findById(req.body.id).then((user) => {
        res.send(user);
    });
})

export default getById