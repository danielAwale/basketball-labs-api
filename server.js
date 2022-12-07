require("dotenv").config();
const router = require("express").Router();

// Web Config
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// DB Setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Middleware
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// Routing
const landing_page = require("./routes/landing_page")(db);
const filter = require("./routes/filter")(db);
const auth = require("./routes/jwtAuth");
const watchlist = require("./routes/watchlist");

router.get("/test", async(req, res) => {
  try {
    res.send("test");
    const newUser = await db.query("SELECT * FROM users");
    console.log(newUser);
    res.send(newUser);
  } catch (err) {
    console.error(err);
  }
});

// Mount Resource
app.use("/", landing_page);
app.use("/filter", filter);
app.use("/auth", auth(db));
app.use("/watchlist", watchlist(db));

app.listen(PORT, () => {
  console.log("server has started listening on port ", PORT)
})