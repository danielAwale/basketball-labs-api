require("dotenv").config();

// Web Config
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// DB Setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

//Middleware
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// Routing
const landing_page = require("./routes/landing_page")(db);
const login = require("./routes/login")
const logout = require("./routes/logout");
const register = require("./routes/register");
const filter = require("./routes/filter")(db);
const auth = require("./routes/jwtAuth");
const dashboard = require("./routes/dashboard");

// //Mount Resource
app.use("/", landing_page);
app.use("/login", login);
app.use("/logout", logout);
app.use("/register", register);
app.use("/filter", filter);
app.use("/auth", auth(db));
app.use("/dashboard", dashboard(db));

app.listen(PORT, () => {
  console.log("server has started listening on port ", PORT)
})