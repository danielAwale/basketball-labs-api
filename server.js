const express = require("express");
const PORT = 5000;

const app = express();

//middleware
app.use(express.json()); //req.body

app.listen(PORT, () => {
  console.log("server has started listening on port ", PORT)
})