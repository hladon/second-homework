import Sequelize from 'sequelize';
const {DataTypes}=Sequelize;
import connection from './DBModel.js';

const Group = connection.define('Groups', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'group_id'},
  name: {
    type: DataTypes.STRING,
    field: 'group_name'},
  permissions: {
    type: DataTypes.STRING,
    field: 'permission'},
}
, {
  timestamps: false,
  tableName: 'groups',
});

const User = connection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'user_id'},
  login: {
    type: DataTypes.STRING,
    field: 'user_login'},
  password: {
    type: DataTypes.STRING,
    field: 'user_password'},
  age: DataTypes.INTEGER,
}
, {
  paranoid: true,
  tableName: 'users',
  deletedAt: 'isDeleted',
});

const UserGroup=connection.define('UserGroup',{
        id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'UserGroup_id'}
}
,{
        timestamps: false,
        tableName: 'user_group',
})
Group.belongsToMany(User,{as: 'users',through:UserGroup});
User.belongsToMany(Group,{as: 'groups',through:UserGroup});


UserGroup.belongsTo(User,{as: 'User'});
UserGroup.belongsTo(Group,{as: 'Group'});

Group.hasMany(UserGroup);
User.hasMany(UserGroup);


export  {Group,User,UserGroup};
