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

  router.post("/", authorization, (req, res) => {
    console.log("this is the", req.user)
    // const userID = req.params.userId;
    try {
      db.query("SELECT * FROM watched_players JOIN players ON players.id=watched_players.player_id WHERE watched_players.user_id = $1", [req.user])
        .then((watchlist) => {
          console.log(watchlist.rows[0])
          res.json(watchlist.rows)
        })

    } catch (error) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  })

  router.post("/add/:playerId", authorization, async (req, res) => {
    console.log("......", req.params.playerId, "---------", req.user)
    try {
      // console.log(req.params.userId);
      // console.log(req.params.playerId);
      const newId = await db.query('INSERT INTO watched_players (player_id, user_id) VALUES($1,$2)', [req.params.playerId, req.user])
      res.json(newId);
    } catch (error) {
      console.log(error.message)
    }
  });

  router.delete("/delete/:playerId", authorization, async (req, res) => {
    try {
      // console.log(req.params.playerId);
      const deleteId = await db.query('DELETE FROM watched_players WHERE player_id=$1 AND user_id=$2', [req.params.playerId, req.user])
      res.json(deleteId);
    } catch (error) {
      console.log(error.message)
    }
  });

  return router;
}