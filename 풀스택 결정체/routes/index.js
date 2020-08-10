var express = require("express");
var parseurl = require("parseurl");
var session = require("express-session");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

module.exports = router;
