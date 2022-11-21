require("dotenv").config();

// Web Config
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const morgan = require("morgan");

// DB Setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

//Middleware
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routing
const landing_page = require("./routes/landing_page");
const login = require("./routes/login")
const logout = require("./routes/logout");
const registration = require("./routes/registration");

// //Mount Resourceß
app.use("/", landing_page);
app.use("/login", login);
app.use("/logout", logout);
app.use("/registration", registration);

app.listen(PORT, () => {
  console.log("server has started listening on port ", PORT)
})