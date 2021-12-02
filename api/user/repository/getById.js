import {User} from '../../common/UserAndGroupRepository.js';

async function findById(id) {
  const user=await User.findByPk(id);
  return user;
}

export default findById;
