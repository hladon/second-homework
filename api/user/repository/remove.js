import User from './userRepository.js';

export default async function remove(UserId) {
  await User.destroy({
    where: {
      id: UserId,
    },
  });
}
