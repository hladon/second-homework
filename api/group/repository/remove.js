import {Group} from '../../common/UserAndGroupRepository.js';

export default async function remove(GroupId) {
  await Group.destroy({
    where: {
      id: GroupId,
    },
  });
}
