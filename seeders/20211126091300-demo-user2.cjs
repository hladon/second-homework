'use strict'
module.exports={
 up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('users', [{
     user_login: 'user2',
     user_password: 'user2222',
     age:15,
     createdAt: new Date(),
     updatedAt: new Date()
   }]);
 },

 down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users', null, {});
 }
}