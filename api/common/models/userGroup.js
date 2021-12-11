import Sequelize from 'sequelize';
const { DataTypes } = Sequelize;
import connection from '../lib/DB.js';

const UserGroup = connection.define('UserGroup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'UserGroup_id' }
}
, {
    timestamps: false,
    tableName: 'user_group'
});

export default UserGroup;
