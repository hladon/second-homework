import find from '../repository/getById.js';

async function findById(id) {
    let user = await find(id);
    if (user === null || user.isDeleted === true) {
        user = 'Such user don`t exist';
    }
    return user;
}

export default findById;
