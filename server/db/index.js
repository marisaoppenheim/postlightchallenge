"use strict";

const db = require("./database");
const Employee = require("./Employee");
const Location = require("./Location");

Employee.belongsTo(Location);
Location.hasMany(Employee);

module.exports = {
  db,
  Employee,
  Location
};
