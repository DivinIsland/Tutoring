function isLoggedMiddleware(req, res, next) {
  if (req.session.isLogged) {
    next();
  } else {
    res.redirect("/auth/signin");
  }
}

module.exports = {
  isLoggedMiddleware,
};
