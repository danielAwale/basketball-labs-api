const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
const { Pool } = require("pg");

module.exports = function(db) {
  router.get("/", async (req, res) => {
    try {
      const featuredPlayer = await db.query('SELECT first_name, last_name, points, assists, rebounds FROM players')
      console.log(res.json(featuredPlayer.rows))
    } catch (error) {
      console.log(error.message)
    }
  });
  return router;
}
