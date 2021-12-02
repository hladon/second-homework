import {Group} from '../../common/UserAndGroupRepository.js';

async function findAll() {
  const users=await Group.findAll({include:'users'});
  return users;
}

export default findAll;
