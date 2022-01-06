import getAll from '../service/getAll.js';
import requestHandler from '../../../lib/api.js'

const getGroups = requestHandler('Get all groups - Group API', null, async(req, res, next) => {
    getAll().then((output) => {
        res.send(output);
    });
})
export default getGroups