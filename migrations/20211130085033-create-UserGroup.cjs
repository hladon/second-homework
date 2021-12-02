'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_group',{
        id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'UserGroup_id'},
        GroupId:{
                type: Sequelize.INTEGER,
                references:{
                  model: {
                    tableName: 'groups',
                  },
                  key: 'group_id'
                },
                allowNull: false
        },
        UserId:{
          type: Sequelize.INTEGER,
          references:{
            model: {
              tableName: 'users',
            },
            key: 'user_id'
          },
          allowNull: false
  }
});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_group');
  }
};