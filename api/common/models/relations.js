import User from './user.js';
import Group from './group.js';
import UserGroup from './userGroup.js';

Group.belongsToMany(User, { as: 'users', through:UserGroup });
User.belongsToMany(Group, { as: 'groups', through:UserGroup });


UserGroup.belongsTo(User, { as: 'User' });
UserGroup.belongsTo(Group, { as: 'Group' });

Group.hasMany(UserGroup, {
    onDelete:'CASCADE'
});
User.hasMany(UserGroup);


export  { Group, User, UserGroup };
