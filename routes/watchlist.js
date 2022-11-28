const router = require("express").Router();
const authorization = require("../middleware/authorization");

module.exports = (db) => {
  // router.get("/", async (req, res) => {
  //   try {

  //     const user = await db.query("SELECT user_name FROM users WHERE user_id = $1",
  //       [req.user]
  //     );

  //     res.json(user.rows[0]);
  //   } catch (error) {
  //     console.error(err.message);
  //     res.status(500).json("Server Error");
  //   }
  // })
  router.get("/", authorization, (req, res) => {
    try {
      db.query("SELECT user_name FROM users WHERE user_id = $1",
        [req.user]
      ).then((user) => {
        res.json(user.rows[0]);
      })

    } catch (error) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  })
  return router;
}