const express = require("express");
const router = express.Router();
const { Pool } = require("pg");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

module.exports = function(db) {

  router.get("/", async (req, res) => {
    try {
      const getAllStats = await db.query('SELECT * FROM players')
      res.json(getAllStats.rows)
    } catch (error) {
      console.log(error.message)
    }
  })

  router.get("/points", async (req, res) => {
    try {
      const filterByPoints = await db.query('SELECT points FROM players ORDER BY points DESC')
      res.json(filterByPoints.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/assists", async (req, res) => {
    try {
      const filterByAssists = await db.query('SELECT assists FROM players ORDER BY assists DESC')
      res.json(filterByAssists.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/rebounds", async (req, res) => {
    try {
      const filterByRebounds = await db.query('SELECT rebounds FROM players ORDER BY rebounds DESC')
      res.json(filterByRebounds.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/steals", async (req, res) => {
    try {
      const filterBySteals = await db.query('SELECT steals FROM players ORDER BY steals DESC')
      res.json(filterBySteals.rows)
    } catch (error) {
      console.log(error.message)
    }
  });


  router.get("/blocks", async (req, res) => {
    try {
      const filterByBlocks = await db.query('SELECT blocks FROM players ORDER BY blocks DESC')
      res.json(filterByBlocks.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/turnovers", async (req, res) => {
    try {
      const filterByTurnovers = await db.query('SELECT turnovers FROM players ORDER BY turnovers ASC')
      res.json(filterByTurnovers.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/fgp", async (req, res) => {
    try {
      const filterByFGP = await db.query('SELECT field_goal_percentage FROM players ORDER BY field_goal_percentage DESC')
      res.json(filterByFGP.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/tpm", async (req, res) => {
    try {
      const filterByTPM = await db.query('SELECT three_points_made FROM players ORDER BY three_points_made DESC')
      res.json(filterByTPM.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/ftp", async (req, res) => {
    try {
      const filterByFTP = await db.query('SELECT free_throw_percentage FROM players ORDER BY free_throw_percentage DESC')
      res.json(filterByFTP.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/playerid", async (req, res) => {
    try {
      const filterById = await db.query('SELECT id FROM players ORDER BY id ASC')
      res.json(filterById.rows)
    } catch (error) {
      console.log(error.message)
    }
  });

  router.post("/add/:playerId/:userId", async (req, res) => {
    try {
      // console.log(req.params.userId);
      // console.log(req.params.playerId);
      const newId = await db.query('INSERT INTO watched_players (player_id, user_id) VALUES($1,$2)', [req.params.playerId, req.params.userId])
      res.json(newId);
    } catch (error) {
      console.log(error.message)
    }
  });

  router.delete("/delete/:playerId/:userId", async (req, res) => {
    try {
      // console.log(req.params.playerId);
      const deleteId = await db.query('DELETE FROM watched_players WHERE player_id=$1 AND user_id=$2', [req.params.playerId, req.params.userId])
      res.json(deleteId);
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/playerid", async (req, res) => {
    try {
      const filterById = await db.query('SELECT id FROM players ORDER BY id ASC')
      res.json(filterById.rows)
    } catch (error) {
      console.log(error.message)
    }
  });


  return router;
}