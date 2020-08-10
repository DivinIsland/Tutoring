var express = require("express");

var { database } = require("../database/mysql");
var router = express.Router();
var { v4 } = require("uuid");
var moment = require("moment");
const uuid4 = v4;

//NOTE: Board API Router
router.get("/api", async (req, res, next) => {
  const query = await database.query(`SELECT * FROM express_movie_app.board`);

  res.json(query);
});

router.post("/api/delete", async (req, res, next) => {
  const { list } = req.body;
  const newList = list
    .map((item) => {
      return `"${item}"`;
    })
    .join(",");
  console.log(newList);
  console.log(req.body, "api delete");

  const rows = await database.query(
    `DELETE FROM express_movie_app.board WHERE contentSeq IN (${newList})`
  );

  console.log(rows);

  res.json({ result: 1 });
});

//NOTE: board create page render
router.get("/create", (req, res, next) => {
  res.render("boardCreate", { title: "Board Create" });
});

//NOTE: Board main page Render
router.get("/", async function (req, res, next) {
  const rows = await database.query(`SELECT * FROM express_movie_app.board`);
  console.log(rows, "rows");
  const newList = rows.map((item) => {
    return {
      ...item,
      stringCreateAt: moment.unix(item.createAt).format("YYYY-MM-DD"),
    };
  });
  console.log(newList);
  res.render("board", { title: "Board", boardList: newList });
});

//NOTE: Board Content Insert
router.post("/api/create", async (req, res, next) => {
  const { title, content, author } = req.body;
  const createAt = moment().unix();
  const contentSeq = uuid4().replace(/\-/g, "");

  console.log(req.body, "req.body");

  try {
    const rows = await database.query(
      `INSERT INTO express_movie_app.board (title, content, contentSeq, createAt, author) VALUES ("${title}", "${content}", "${contentSeq}", "${createAt}", "${author}")`
    );

    if (rows.affectedRows === 1) {
      res.json({ result: 1 });
    }
  } catch (err) {
    res.json({ result: 2 });
  }
});

module.exports = router;

// moment(timestamp).format('YYYY-MM-DD');

// const rows = await database.query(`
//     INSERT INTO express_movie_app.board (title,content,seq,createAt,author) VALUES("${title}","${content}","${boardSeq}","${createAt}","${author}")
//   `);

// const newList = rows.map((item) => ({
//   ...item,
//   stringCreateAt: moment(item.createAt).format("YYYY-MM-DD"),
// }));
