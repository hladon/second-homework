import remove from '../repository/remove.js';

async function removeGroup(id) {
    const isSuccess = await remove(id);
    if (isSuccess) {
        return `Group with id= ${id} was removed!`;
    }
    return `Group with id= ${id} dont exist!`;
}

export default removeGroup;

