import {find} from '../repository/users-store.js'

async function findById(id){
        let user =await find(id);
        if (user===undefined) {
                user='Such user don`t exist';
              }
        if (user.isDeleted==true) {
                user='Such user don`t exist';
              }
        return user;
}
export{findById}