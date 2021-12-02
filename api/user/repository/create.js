import {User} from '../../common/UserAndGroupRepository.js';

export default function save(entity) {
  try {
    return User.create(entity);
  } catch (error) {
    console.log(error);
  }
}
