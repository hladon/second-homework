import Sequelize from 'sequelize';
const { DataTypes } = Sequelize;
import connection from '../lib/DB.js';

const User = connection.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'user_id' },
    login: {
        type: DataTypes.STRING,
        field: 'user_login' },
    password: {
        type: DataTypes.STRING,
        field: 'user_password' },
    age: DataTypes.INTEGER
}
, {
    paranoid: true,
    tableName: 'users',
    deletedAt: 'isDeleted'
});

export default User;
