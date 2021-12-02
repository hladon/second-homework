import find from '../repository/getById.js';

async function findById(id) {
  let group =await find(id);
  if (group===null) {
    group='Such group don`t exist';
  }
  return group;
}

export default findById;
