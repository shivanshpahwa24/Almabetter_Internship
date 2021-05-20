const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const User = require("../../models/User");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { check, validationResult } = require("express-validator");

// Get all users for leaderboard
router.get("/", (req, res) =>
  User.findAll()
    .then((users) =>
      res.render("users", {
        users,
      })
    )
    .catch((err) => res.render("error", { error: err }))
);

// Add a user marks
router.post("/add", (req, res) => {
  let {
    rollno,
    name,
    marks_maths,
    marks_physics,
    marks_chemistry,
    total,
    percentage,
  } = req.body;
  let errors = [];

  // Insert into table
  User.create({
    rollno,
    name,
    marks_maths,
    marks_physics,
    marks_chemistry,
    total,
    percentage,
  })
    .then((users) => res.redirect("/users"))
    .catch((err) => res.render("error", { error: err.message }));
});

module.exports = router;
