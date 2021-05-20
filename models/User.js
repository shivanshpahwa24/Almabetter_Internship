const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
  rollNo: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  maths: {
    type: Sequelize.INTEGER,
  },
  physics: {
    type: Sequelize.INTEGER,
  },
  chemistry: {
    type: Sequelize.INTEGER,
  },
  total: {
    type: Sequelize.INTEGER,
  },
  percentage: {
    type: Sequelize.FLOAT,
  },
});

User.sync().then(() => {
  console.log("table created");
});
module.exports = User;
