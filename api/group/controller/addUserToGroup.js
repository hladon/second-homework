import Joi from 'Joi';
import addUser from '../service/addUserToGroup.js';

const idSchema = Joi.number().integer().min(0);
export default function addUserToGroup(req, res) {
    const userId = idSchema.validate(req.query.usId);
    const groupId = idSchema.validate(req.query.grId);

    if (userId.error) {
        res.status(403).send(userId.error.details);
        return;
    }

    if (groupId.error) {
        res.status(403).send(groupId.error.details);
        return;
    }

    addUser(userId.value, groupId.value).then((report) => {
        res.send(report);
    });
}
