import {User} from '../../common/UserAndGroupRepository.js';

export default async function remove(UserId) {
  await User.destroy({
    where: {
      id: UserId,
    },
  });
}
