import Joi from 'Joi';
import addUser from '../service/addUserToGroup.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    usId: Joi.number().integer().min(0),
    grId: Joi.number().integer().min(0),
})

const addUserToGroup = requestHandler('Add user to group - Group API', schema, async(req, res, next) => {
    addUser(userId.value, groupId.value).then((report) => {
        res.send(report);
    });
})

export default addUserToGroup