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
    check("rollNo", "Roll No. is required").not().isEmpty(),
    check("name", "Name is required").not().isEmpty(),
    check("maths", "Maths Marks should be in numeric").isNumeric(),
    check("physics", "Physics Marks should be in numeric").isNumeric(),
    check("chemistry", "Chemistry Marks should be in numeric").isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req); //Check for any errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { rollNo, name, maths, physics, chemistry } = req.body;

    const total = parseInt(maths) + parseInt(physics) + parseInt(chemistry);
    const percentage = total / 3;

    try {
      /*  //See if User exists
      let user = await User.findOne({ parseInt(rollNo) });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Roll No. already exists" }] });
      } */

      // Insert into table
      const user = await User.create({
        rollNo,
        name,
        maths,
        physics,
        chemistry,
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
