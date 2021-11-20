import User from '../../api/user/repository/userRepository.js';

await User.sync({force: true});
console.log('All models were synchronized successfully.');
