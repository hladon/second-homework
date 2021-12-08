import getAll from '../repository/getAll.js';

export default async function getAutoSuggestUsers() {
    const results = await getAll();
    return results;
}
