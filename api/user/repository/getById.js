import User from './userRepository.js';

async function findById(id) {
  const user=await User.findByPk(id);
  return user;
}

export default findById;
