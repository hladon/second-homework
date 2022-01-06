import Joi from 'joi';
import saveGroup from '../service/create.js';
import { permissions } from '../common/constants.js';
import requestHandler from '../../../lib/api.js'

const schema = Joi.object({
    name: Joi.string().required(),
    permissions: Joi.string().valid(...permissions).required()
});

const save = requestHandler('Save group - Group API', schema, async(req, res, next) => {
    saveGroup(req.body).then((output) => {
        res.send(output);
    });
})

export default save