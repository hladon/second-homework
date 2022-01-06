import Joi from 'joi';
import removeUser from '../service/remove.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    id: Joi.number().integer().min(0).required()
});

const remove = requestHandler('Remove by id - User API', schema, async(req, res, next) => {
    removeUser(req.body.id).then((response) => {
        res.send(response);
    });
})

export default remove