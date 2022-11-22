const express = require("express");
const { Pool } = require("pg");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const featuredPlayer = await Pool('SELECT picture,first_name, last_name, points, assists, rebounds FROM player WHERE points in (SELECT DISTINCT top 3 points FROM player ORDER by points desc)')
  } catch (error) {
    console.log(error.message)

  }

});

module.exports = router;
