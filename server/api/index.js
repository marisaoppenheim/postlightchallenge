"use strict";

const router = require("express").Router();
const { Employee, Location } = require("../db");

router.get("/employees", async (req, res, next) => {
  try {
    const employees = await Employee.findAll({
      include: [{ all: true }]
    });
    res.json(employees);
  } catch (err) {
    next(err);
  }
});

router.get("/locations", async (req, res, next) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
