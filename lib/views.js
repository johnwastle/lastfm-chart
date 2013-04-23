var config = require('./config')
  , qs = require("querystring")
  , request = require('request')
  , templates = require('./templates')
  ;

exports.home = function (req, res, next) {
  res.send(templates.home.render());
}
