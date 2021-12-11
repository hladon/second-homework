import Joi from 'joi';
import getAutoSuggestUsers from '../service/getWithParams.js';
const subStringSchema = Joi.string();
const limitSchema = Joi.number().integer().min(0);
export default function getUsers(req, res) {
    const substring = subStringSchema.validate(req.query.sub);
    if (substring.error) {
        res.status(403).send(substring.error.details);
        return;
    }
    const validLimit = limitSchema.validate(req.query.sub);
    if (validLimit.error) {
        res.status(403).send(validLimit.error.details);
        return;
    }
    getAutoSuggestUsers(substring.value, validLimit.value)
        .then((output) => {
            res.send(output);
        });
}
