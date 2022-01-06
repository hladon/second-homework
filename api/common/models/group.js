import Sequelize from 'sequelize';
const { DataTypes } = Sequelize;
import connection from '../../../lib/db/DB.js';

const Group = connection.define('Groups', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'group_id'
    },
    name: {
        type: DataTypes.STRING,
        field: 'group_name'
    },
    permissions: {
        type: DataTypes.STRING,
        field: 'permission'
    }
}, {
    timestamps: false,
    tableName: 'groups'
});

export default Group;