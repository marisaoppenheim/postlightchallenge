const Sequelize = require("sequelize");
const db = require("./database");

const Employee = db.define("employee", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  department: {
    type: Sequelize.ENUM,
    allowNull: false,
    values: ["Engineering", "Product Management", "Operations", "Design"]
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = Employee;
