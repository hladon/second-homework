import Joi from 'joi';
import updateGroup from '../service/update.js';
import { permissions } from '../common/constants.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    permissions: Joi.string().valid(...permissions).required()
});

const update = requestHandler('Update group - Group API', schema, async(req, res, next) => {
    updateGroup(req.body).then((output) => {
        res.send(output);
    });
})

export default update