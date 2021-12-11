import Joi from 'joi';
import saveGroup from '../service/create.js';
import { permissions } from '../common/constants.js';

const groupSchema = Joi.object({
    name: Joi.string().required(),
    permissions:Joi.string().valid(...permissions).required()
});

export default function save(req, res) {
    const group = req.body;
    const groupValidation = groupSchema.validate(group);
    if (groupValidation.error) {
        res.status(403).send(groupValidation.error.details);
        return;
    }
    saveGroup(groupValidation.value).then((outpoot) => {
        res.send(outpoot);
    });
}
