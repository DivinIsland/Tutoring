var express = require("express");
var { isLoggedMiddleware } = require("./middleware");
var router = express.Router();

//NOTE: MyPage

router.get("/mypage", isLoggedMiddleware, function (req, res, next) {
  res.render("mypage", { title: "MyPage" });
});

module.exports = router;
