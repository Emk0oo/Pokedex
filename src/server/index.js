const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use(bodyparser.json());

app.use("/api", require("./router/pokemon.router"));