'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'user_id'},
      login: {
        type: Sequelize.STRING,
        field: 'user_login'},
      password: {
        type: Sequelize.STRING,
        field: 'user_password'},
      age: Sequelize.INTEGER,
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
      isDeleted:Sequelize.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};