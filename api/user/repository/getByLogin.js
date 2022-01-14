import { User } from '../../common/models/relations.js';

async function findByLogin(login) {
    return await User.findOne({ where: { user_login: login } });
}

export default findByLogin;
