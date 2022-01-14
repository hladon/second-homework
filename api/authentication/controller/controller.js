import express from 'express';
const loginRouter = express.Router();
import Joi from 'joi';
import requestHandler from '../../../lib/api.js';
import login from '../service/authenticate.js';

const schema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required()
});
const create = requestHandler('Create token -Authenticate API', schema, async(req, res, next) => {
    login(req.body.login, req.body.password).then((token) => {
        if (token) {
            return res.send(token);
        }
        return res.status(403).send('Wrong login or password');
    })
});

export default create;