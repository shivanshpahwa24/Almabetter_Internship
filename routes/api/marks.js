const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");

// Get all users for leaderboard
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    //For showing the latest marks on the top

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Add a user marks
router.post(
  "/",
  [
    check("rollno", "Roll No. is required").not().isEmpty(),
    check("name", "Name is required").not().isEmpty(),
    check("marks_maths", "Maths Marks should be in numeric").isNumeric(),
    check("marks_physics", "Physics Marks should be in numeric").isNumeric(),
    check(
      "marks_chemistry",
      "Chemistry Marks should be in numeric"
    ).isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req); //Check for any errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { rollno, name, marks_maths, marks_physics, marks_chemistry } =
      req.body;

    const total =
      parseInt(marks_maths) +
      parseInt(marks_physics) +
      parseInt(marks_chemistry);
    const percentage = total / 3;

    try {
      //See if User exists
      let user = await User.findOne({ rollno });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Roll No. already exists" }] });
      }

      // Insert into table
      user = await User.create({
        rollno,
        name,
        marks_maths,
        marks_physics,
        marks_chemistry,
        total,
        percentage,
      });

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
