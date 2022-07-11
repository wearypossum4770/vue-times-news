const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const PORT = process.env.PORT || 5000;
express()
  .use(favicon(__dirname + "/dist/favicon.ico"))
  .use(express.static(path.join(__dirname, "dist")))
  .get("/", (req, res) => res.render("dist/index.html"))
  .get("/ping", function (req, res) {
    return res.send("pong");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
