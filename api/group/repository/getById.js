import { Group } from '../../common/models/relations.js';

async function findById(id) {
    const group = await Group.findByPk(id);
    return group;
}

export default findById;
