const Sequelize = require('sequelize');

const sequelize = new Sequelize('e-commerce', 'root', 'Balaji@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;