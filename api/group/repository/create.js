import { Group } from '../../common/models/relations.js';

export default function save(entity) {
    try {
        return Group.create(entity);
    } catch (error) {
        console.log(error);
    }
}
