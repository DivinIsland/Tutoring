var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello world' });
});

router.get('/login', function (req, res, next) {
  res.render('index', { title: 'Login Page' });
});

router.post('/login', function (req, res, next) {
  console.log("login post in")
  console.log(req.body, '받은 데이터')

  console.log(req.body.username)
  console.log(req.body.password)


  const isSuccessLogin = true;
  let data;

  if(isSuccessLogin){
    data = {
      result : 1,
      profile : {
        name : "최율겸",
        age : 27,
        hobby : "coding"
      }
    }
  }else{
    data = {
      result : 0
    }
  }
  res.json(data)
  // res.render('index', { title: 'Login Page' });
});

module.exports = router;
