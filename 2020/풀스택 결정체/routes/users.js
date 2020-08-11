var express = require("express");
var { database } = require("../database/mysql");
var { isLoggedMiddleware } = require("./middleware");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//NOTE: mypage
router.get("/mypage", isLoggedMiddleware, async (req, res, next) => {
  const rows = await database.query(`
  SELECT * FROM express_movie_app.users WHERE userCode ="${req.session.profile.userCode}"
  `);

  console.log(rows, "mypage rows");

  if (rows.length === 0) {
    res.redirect("/auth/signin");
  } else {
    const body = {
      title: "MyPage",
      profile: req.session.profile,
    };

    res.render("mypage", body);
  }
});

module.exports = router;
