import {UserGroup} from '../../common/UserAndGroupRepository.js';

export default async function addUser(userId,groupId){
         UserGroup.create({
                 GroupId:userId,
                 UserId:groupId
         })

}