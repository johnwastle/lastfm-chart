var hogan = require('hogan.js')
  , fs = require('fs')
  , path = require('path')
  , BASE = path.resolve( __dirname, '../templates')
  ;

function template(filename) {
  return hogan.compile(fs.readFileSync(BASE + '/' + filename, 'utf8'));
}

exports.home = template('home.html');

