// 세션값이 없으면 로그인페이지
function isLoggedMiddleware(req, res, next) {
  if (req.session.isLogged === true) {
    next();
  } else {
    res.redirect("/auth/signin");
  }
}

module.exports = {
  isLoggedMiddleware,
};
