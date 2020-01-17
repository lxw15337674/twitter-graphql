const config = require('../config/db.config.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config);
module.exports = sequelize;
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
