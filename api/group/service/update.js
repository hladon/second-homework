import update from '../repository/update.js';
import findById from '../repository/getById.js';

async function updateGroup(group) {
    const existGroup = findById(group.id);
    if (existGroup === null) {
        return 'Group doesn`t exist anymore';
    }
    const status = await update(group);
    if (status) {
        return `Group ${JSON.stringify(group)} was updated`;
    }
    return 'Group wasnt updated';
}

export default updateGroup;
