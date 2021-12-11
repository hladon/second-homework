import { UserGroup } from '../../common/models/relations.js';

export default async function addUser(userId, groupId) {
    UserGroup.create({
        GroupId:userId,
        UserId:groupId
    });
}
