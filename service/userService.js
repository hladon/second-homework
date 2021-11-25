import {find,suggestUsers,save,setDeleted} from '../repository/users-store.js'

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

async function getAutoSuggestUsers(subString, limit){
          const results=await suggestUsers(subString);
          if (results.length==0) {
                results='There is no apropriate results';
              }
          results.sort((a, b)=>{
            if (a.login>b.login) {
              return 1;
            }
            if (a.login<b.login) {
              return -1;
            }
            return 0;
          });
          if (results.length<=limit) {
            return results;
          }
          return results.slice(0, limit);
}

async function saveUser(validatedUser){
        const user =validatedUser.value;
        user.isDeleted=false;
        const status=await save(user);
        if(status){
                return `${status}${JSON.stringify(user)}`;
        }
        return 'User wasnt save';
}

async function deleteUser(id){
        const isSuccess=await setDeleted(id);
        if(isSuccess){
                return `User with id= ${id} was removed!`
        }
        return `User with id= ${id} dont exist!`;
}
export{findById,getAutoSuggestUsers,saveUser,deleteUser}