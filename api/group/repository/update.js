import { Group } from '../../common/models/relations.js';

export default async function save(entity) {
    try {
        Group.findOne({ where: { id: `${entity.id}` } }).then(
            (group) => {
                if (group) {
                    group.update(entity);
                }
                return group;
            },
        );
    } catch (error) {
        console.log(error);
    }
}
