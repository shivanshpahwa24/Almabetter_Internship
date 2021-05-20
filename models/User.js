const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
  rollno: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marks_maths: {
    type: Sequelize.INTEGER,
  },
  marks_physics: {
    type: Sequelize.INTEGER,
  },
  marks_chemistry: {
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
