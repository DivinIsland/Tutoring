var express = require("express");
var { v4 } = require("uuid");
var { database } = require("../database/mysql");
var router = express.Router();

const uuid4 = v4;

//NOTE: Signin main Page
router.get("/signin", function (req, res, next) {
  res.render("signin", { title: "signin" });
});

//NOTE: Signup main page
router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "signup" });
});

//NOTE: signup post
router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const userCode = uuid4().replace(/\-/g, "");

  const rows = await database.query(`
  INSERT INTO express_movie_app.users (username, email, password, userCode) VALUES ("${username}", "${email}", "${password}", "${userCode}")
  `);

  if (rows.affectedRows === 1) {
    res.json({ result: 1 });
  } else {
    res.json({ result: 2 });
  }
});

//NOTE: signin post

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;

  const rows = await database.query(`
  SELECT * FROM express_movie_app.users WHERE email="${email}" AND password = "${password}"
  `);

  if (rows.length === 1) {
    req.session.isLogged = true;
    req.session.profile = {
      username: rows[0].username,
      email: rows[0].email,
      userCode: rows[0].userCode,
    };
    res.json({ result: 1 });
  } else {
    res.json({ result: 2 });
  }
});

//NOTE: logout get

router.get("/logout", (req, res, next) => {
  req.session.destroy();
  console.log("로그아웃!");
  res.redirect("/");
});

//NOTE: signout post
router.post("/signout", async (req, res, next) => {
  const { userCode } = req.body;

  const rows = await database.query(`
  DELETE FROM express_movie_app.users WHERE userCode="${userCode}"
  `);

  if (rows.affectedRows === 1) {
    res.json({ result: 1 });
  } else {
    res.json({ result: 2 });
  }
});

module.exports = router;
