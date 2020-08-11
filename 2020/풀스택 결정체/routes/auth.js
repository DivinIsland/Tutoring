//NOTE: Auth Router.

var express = require("express");
var { database } = require("../database/mysql");
var { v4 } = require("uuid");
var router = express.Router();
const uuid4 = v4;

//NOTE: logout router
router.get("/logout", function (req, res, next) {
  req.session.destroy();
  res.redirect("/");
});

//NOTE: Sign in router.
router.get("/signin", function (req, res, next) {
  res.render("signin", { title: "Sign In" });
});

//NOTE: Signin API Router
router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;

  const rows = await database.query(
    `SELECT * FROM express_movie_app.users WHERE email="${email}" AND password="${password}"`
  );

  console.log(rows, "rows");

  if (rows.length) {
    req.session.isLogged = true;
    req.session.profile = {
      email: rows[0].email,
      username: rows[0].username,
      userCode: rows[0].userCode,
    };
    console.log(req.session, "req.session");

    res.json({ result: 1, username: rows.username });
  } else {
    res.json({ result: 2 });
  }
});

//NOTE: Sign up Router.
router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign Up" });
});

//NOTE: Sign up API
router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const userCode = uuid4().replace(/\-/g, "");

  try {
    const rows = await database.query(
      `INSERT INTO express_movie_app.users (username, email, password, userCode) VALUES ("${username}", "${email}", "${password}", "${userCode}")`
    );

    if (rows.affectedRows === 1) {
      res.json({ result: 1 });
    }
  } catch (err) {
    res.json({ result: 2 });
  }
});

//NOTE: Delete Router

router.get("/delete", (req, res, next) => {
  res.render("delete", { title: "Delete" });
});

//NOTE: Delete API Router

router.post("/delete", async (req, res, next) => {
  const { email, password } = req.body;
  let deleteIndexCode = null;

  try {
    const findInfo = await database.query(
      `SELECT * FROM express_movie_app.users WHERE email="${email}" AND password="${password}"`
    );

    deleteIndexCode = findInfo[0].userCode;
    const deleteQuery = await database.query(
      `DELETE FROM express_movie_app.users WHERE userCode="${deleteIndexCode}"`
    );

    if (deleteQuery.affectedRows === 1) {
      res.json({ result: 1 });
    }
  } catch (err) {
    res.json({ result: 2 });
  }
});

module.exports = router;
