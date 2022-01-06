import Joi from 'joi';
import getAutoSuggestUsers from '../service/getWithParams.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    sub: Joi.string(),
    lim: Joi.number().integer().min(0)
})

const getUsers = requestHandler('Get users with parameters - User API', schema, async(req, res, next) => {
    getAutoSuggestUsers(req.body.sub, req.body.lim)
        .then((output) => {
            res.send(output);
        });
})

export default getUsers