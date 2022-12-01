const router = require("express").Router();
const authorization = require("../middleware/authorization");

module.exports = (db) => {
  router.get("/", (req, res) => {
    try {
      db.query("SELECT * FROM players LIMIT 10", [req.user])
        .then((user) => {
          console.log(user);
          console.log(res.json(user.rows[0]));
        })

    } catch (error) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  })
  return router;
}