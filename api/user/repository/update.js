import {User} from '../../common/UserAndGroupRepository.js';

export default async function save(entity) {
  try {
    User.findOne({where: {id: `${entity.id}`}}).then(
        (user)=>{
          if (user) {
            user.update(entity);
          }
          return user;
        },
    );
  } catch (error) {
    console.log(error);
  }
}
