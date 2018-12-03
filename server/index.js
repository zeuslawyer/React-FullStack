const express = require("express");
// const fetch = require('fetch');

const app = express();

app.get("/", (req, res) => {
  res.send({ status: "Running!" });
});
app.get("/json", (req, res) => {
  res.json({ resJSON: "is in json" });
});

app.listen(3000, () => {
  console.log("\n>>\nApp listening on port 3000!\n>>\n");
});
