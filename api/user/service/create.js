import save from '../repository/create.js';

async function saveUser(validatedUser) {
  const user =validatedUser.value;
  const status=await save(user);
  if (status) {
    return `User ${JSON.stringify(user)} has been created`;
  }
  return 'User wasnt save';
}

export default saveUser;
