const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const { SQL_DB, SQL_USER, SQL_PASSWORD, SQL_TYPE, SQL_HOST } = process.env;

module.exports = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD, {
  host: SQL_HOST,
  dialect: SQL_TYPE,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
