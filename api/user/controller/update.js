import Joi from 'joi';
import updateUser from '../service/update.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    id: Joi.number().integer().required(),
    login: Joi.string().required(),
    password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/)
        .required(),
    age: Joi.number().integer().max(130).min(4).required()
});

const update = requestHandler('Get by id - User API', schema, async(req, res, next) => {
    updateUser(userValidation.value).then((outpoot) => {
        res.send(outpoot);
    });
})

export default update