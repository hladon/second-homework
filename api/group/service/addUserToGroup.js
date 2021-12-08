import addUser from '../repository/addUserToGroup.js';

export default async function addUserToGroup(userId, groupId) {
    return await addUser(userId, groupId);
}
