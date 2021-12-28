import Joi from 'joi';
import findById from '../service/getById.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    id: Joi.number().integer().min(0).required()
});

const getById = requestHandler('Get by id - User API', schema, async(req, res, next) => {
    findById(req.query.id).then((user) => {
        return res.send(user);
    })
})

export default getById;