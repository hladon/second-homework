import Joi from 'joi';
import updateGroup from '../service/update.js';
import { permissions } from '../common/constants.js';

const groupSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    permissions:Joi.string().valid(...permissions).required()
});

export default function update(req, res) {
    const groupValidation = groupSchema.validate(req.body);
    if (groupValidation.error) {
        res.status(403).send(groupValidation.error.details);
        return;
    }
    updateGroup(groupValidation.value).then((outpoot) => {
        res.send(outpoot);
    });
}
