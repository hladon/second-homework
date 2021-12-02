'use strict'
module.exports={
 up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('users', [{
     user_login: 'user3',
     user_password: 'user3333',
     age:15,
     createdAt: new Date(),
     updatedAt: new Date()
   }]);
 },

 down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users', null, {});
 }
}