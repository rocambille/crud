require("dotenv").config();
const express = require("express");

const app = express();

const routes = require("./routes");

app.use(routes);

const port = process.env.APP_PORT;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server listening on port ${port}`);
  }
});
