import {Group} from '../../common/UserAndGroupRepository.js';

export default function save(entity) {
  try {
    return Group.create(entity);
  } catch (error) {
    console.log(error);
  }
}
