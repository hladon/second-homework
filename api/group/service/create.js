import save from '../repository/create.js';

async function saveGroup(group) {
  const status=await save(group);
  if (status) {
    return `Group ${JSON.stringify(group)} has been created`;
  }
  return 'Group wasnt save';
}

export default saveGroup;
