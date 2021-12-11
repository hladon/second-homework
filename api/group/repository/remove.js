import { Group } from '../../common/models/relations.js';

export default async function remove(GroupId) {
    return await Group.destroy({
        where: {
            id: GroupId
        }
    });
}
