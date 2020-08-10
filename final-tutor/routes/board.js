var express = require("express");
var { v4 } = require("uuid");
var { database } = require("../database/mysql");
var moment = require("moment");
var { isLoggedMiddleware } = require("./middleware");
var router = express.Router();

const uuid4 = v4;

//NOTE: Board render
router.get("/", isLoggedMiddleware, async (req, res, next) => {
  const rows = await database.query(`
  SELECT * FROM express_movie_app.board;
  `);
  const boardList = [...rows];
  const newList = rows.map((item) => {
    return {
      ...item,
      stringCreateAt: moment.unix(item.createAt).format("YYYY-MM-DD"),
    };
  });
  res.render("board", { title: "board", boardList: newList });
});

//NOTE: board create
router.post("/api/create", async (req, res, next) => {
  const { author, title, content } = req.body;
  const contentSeq = uuid4().replace(/\-/g, "");
  const createAt = moment().unix();

  const rows = await database.query(`
  INSERT INTO express_movie_app.board (author, title, content, createAt, contentSeq) VALUES ("${author}", "${title}", "${content}", "${createAt}", "${contentSeq}")
  `);

  if (rows.affectedRows === 1) {
    res.json({ result: 1 });
  } else {
    res.json({ result: 2 });
  }
});

//NOTE: Board Delete
router.post("/api/delete", async (req, res, next) => {
  console.log(req.body);
  const { list } = req.body;
  const newList = list
    .map((item) => {
      return `"${item}"`;
    })
    .join(",");

  console.log(newList);

  const rows = await database.query(`
  DELETE FROM express_movie_app.board WHERE contentSeq IN (${newList})
  `);
  console.log(rows);

  res.json({ result: 1 });
});

module.exports = router;
