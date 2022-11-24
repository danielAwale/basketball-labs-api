const router = require("express").Router();
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator");

//register
module.exports = (db) => {
  router.post("/register", async (req, res) => {
    try {
      //destructure the req.body
      const { name, email, password } = req.body;
      const user = await db.query("SELECT * FROM users WHERE email = $1",
        [email]
      );

      //check if user exists
      if (user.rows.length !== 0) {
        return res.status(401).send("User already exists");
      }

      //bcrypt the password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const bcryptPassword = await bcrypt.hash(password, salt);

      //enter the new user inside db
      const newUser = await db.query("INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, bcryptPassword]
      );

      // res.json(newUser.rows[0]);

      //generate jwt token
      const token = jwtGenerator(newUser.rows[0].user_id);
      res.json({ token });

    } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
    }
  }
  )
  return router;
};

//login
module.exports = (db) => {
  router.post("/login", async (req, res) => {
    try {

      //destructure the req.body
      const { email, password } = req.body;

      //check if user exists
      const user = await db.query("SELECT * FROM users WHERE email = $1",
        [email]
      );

      if (user.rows.length === 0) {
        return res.status(401).json("Password or Email is incorrect");
      }

      //check if incoming password is the same as db password
      const validPassword = await bcrypt.compare(password, user.rows[0].password);

      if (!validPassword) {
        res.status(401).send("Password or Email is incorrect")
      }

      //give them the jwt token
      const token = jwtGenerator(user.rows[0].user_id);
      res.json({ token })

    } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
    }
  })
  return router;
}