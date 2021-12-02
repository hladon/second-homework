import User from './userRepository.js';

export default function save(entity) {
  try {
    return User.create(entity);
  } catch (error) {
    console.log(error);
  }
}
