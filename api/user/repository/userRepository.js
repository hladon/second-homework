import Sequelize from 'sequelize';
const {DataTypes}=Sequelize;
import db from 'dotenv';
db.config();

const sequelize = new Sequelize( {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
const User = sequelize.define('User', {
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
  deletedAt: 'isdeleted',
});

export default User;
