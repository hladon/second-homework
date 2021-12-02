import connection from '../../api/common/DBModel.js';

connection.sync({ force: true });

console.log('All models were synchronized successfully.');
