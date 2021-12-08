import { Group } from '../../common/models/relations.js';

async function findAll() {
    const users = await Group.findAll({ include:'users' });
    return users;
}

export default findAll;
