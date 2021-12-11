import Sequelize from 'sequelize';
const Op = Sequelize.Op;
import { User } from '../../common/models/relations.js';

async function suggestUsers(subString, lim) {
    const users = await User.findAll({
        where: {
            login: { [Op.like]: `%${subString}%` }
        },
        limit: `${lim}`,
        order: ['login']
    });
    return users;
}

export default suggestUsers;
