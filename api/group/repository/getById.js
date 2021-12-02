import {Group} from '../../common/UserAndGroupRepository.js';

async function findById(id) {
  const group=await Group.findByPk(id);
  return group;
}

export default findById;
