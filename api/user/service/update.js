import update from '../repository/update.js';
import findById from '../repository/getById.js';

async function updateUser(validatedUser) {
  const user =validatedUser.value;
  const existUser= findById(user.id);
  if (existUser.isDeleted) {
    return 'User doesn`t exist anymore';
  }
  const status=await update(user);
  if (status) {
    return `User ${JSON.stringify(user)} was updated`;
  }
  return 'User wasnt updated';
}

export default updateUser;
