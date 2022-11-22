const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

router.get("/", async (req, res) => {
  try {
    const featuredPlayer = await Pool('SELECT picture,first_name, last_name, points, assists, rebounds FROM player WHERE points in (SELECT DISTINCT top 3 points FROM player ORDER by points desc)')
    console.log(featuredPlayer)
  } catch (error) {
    console.log(error.message)
  }
});

module.exports = router;
