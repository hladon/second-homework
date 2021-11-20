import remove from '../repository/remove.js';

async function removeUser(id) {
  const isSuccess=await remove(id);
  if (isSuccess) {
    return `User with id= ${id} was removed!`;
  }
  return `User with id= ${id} dont exist!`;
}

export default removeUser;

