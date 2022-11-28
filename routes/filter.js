const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

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
      const filterByPoints = await db.query('SELECT * FROM players ORDER BY points DESC')
      console.log(res.json(filterByPoints.rows))
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/assists", async (req, res) => {
    try {
      const filterByAssists = await db.query('SELECT * FROM players ORDER BY assists DESC')
      console.log(res.json(filterByAssists.rows))
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/rebounds", async (req, res) => {
    try {
      const filterByRebounds = await db.query('SELECT * FROM players ORDER BY rebounds DESC')
      console.log(res.json(filterByRebounds.rows))
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/steals", async (req, res) => {
    try {
      const filterBySteals = await db.query('SELECT * FROM players ORDER BY steals DESC')
      console.log(res.json(filterBySteals.rows))
    } catch (error) {
      console.log(error.message)
    }
  });


  router.get("/blocks", async (req, res) => {
    try {
      const filterByBlocks = await db.query('SELECT * FROM players ORDER BY blocks DESC')
      console.log(res.json(filterByBlocks.rows))
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/turnovers", async (req, res) => {
    try {
      const filterByTurnovers = await db.query('SELECT * FROM players ORDER BY turnovers ASC')
      console.log(res.json(filterByTurnovers.rows))
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/fgp", async (req, res) => {
    try {
      const filterByFGP = await db.query('SELECT * FROM players ORDER BY field_goal_percentage DESC')
      console.log(res.json(filterByFGP.rows))
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/tpm", async (req, res) => {
    try {
      const filterByTPM = await db.query('SELECT * FROM players ORDER BY three_points_made DESC')
      console.log(res.json(filterByTPM.rows))
    } catch (error) {
      console.log(error.message)
    }
  });

  router.get("/ftp", async (req, res) => {
    try {
      const filterByFTP = await db.query('SELECT * FROM players ORDER BY free_throw_percentage DESC')
      console.log(res.json(filterByFTP.rows))
    } catch (error) {
      console.log(error.message)
    }
  });

  return router;
}