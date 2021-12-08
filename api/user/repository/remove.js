import { User } from '../../common/models/relations.js';

export default async function remove(UserId) {
    await User.destroy({
        where: {
            id: UserId
        }
    });
}
