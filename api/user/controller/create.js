import Joi from 'joi';
import saveUser from '../service/create.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/)
        .required(),
    age: Joi.number().integer().max(130).min(4).required()
});

const save = requestHandler('Save user - User API', schema, async(req, res, next) => {
    saveUser(userValidation.value).then((outpoot) => {
        res.send(outpoot);
    });
})

export default save