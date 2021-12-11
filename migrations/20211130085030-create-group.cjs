'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          field: 'group_id'},
        name: {
          type: Sequelize.STRING,
          field: 'group_name'},
        permissions: {
          type: Sequelize.STRING,
          field: 'permission'},
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('groups');
  }
};