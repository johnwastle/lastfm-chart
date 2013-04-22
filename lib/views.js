
exports.home = function (req, res, next) {
  res.send(templates.home.render());
}
