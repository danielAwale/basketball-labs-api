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

  router.post("/:userId", authorization, (req, res) => {
    //const userID = req.params.userId;
    try {
      db.query("SELECT * FROM watched_players JOIN players ON players.id=watched_players.player_id")
      .then((watchlist) => {
        res.json(watchlist.rows)
      })

    } catch (error) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  })
  return router;
}