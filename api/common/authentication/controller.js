import express from 'express';
const loginRouter = express.Router();
import Joi from 'joi';
import login from './authenticate.js';
import verify from './authenticateToken.js';

const credentialSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required()
});

loginRouter.post('/', (req, res) => {
    const userValidation = credentialSchema.validate(req.body);
    if (userValidation.error) {
        return res.status(403).send(userValidation.error.details);
    }
    const user = userValidation.value;
    login(user.login, user.password).then((token) => {
        if (token) {
            return res.send(token);
        }
        return res.status(403).send('Wrong login or password');
    });
});

function authenticateToken(req, res, next) {
    const token = req.headers.authorization;
    if (token === null) {
        return res.sendStatus(401);
    }
    verify(token).then((x) => {
        if (!x) {
            return res.sendStatus(403);
        }
        next();
    });
}

export { loginRouter, authenticateToken };
