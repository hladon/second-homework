import suggestUsers from '../repository/getWithParams.js';

export default async function getAutoSuggestUsers(subString, limit) {
    const results = await suggestUsers(subString, limit);
    return results;
}
