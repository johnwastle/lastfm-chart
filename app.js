var connect = require('connect')
  , delegator = require('artisan-delegator')
  , request = require('request')
  , tweaks = require('./lib/tweaks')
  , config = require('./lib/config')
  , app = connect()
  ;

app.use(connect.favicon());
app.use(connect.query());
app.use(tweaks());
app.use(connect.bodyParser());
app.use(connect.logger('dev'));
app.use(connect.static('static'));
app.use(delegator({ filename: 'uri.map' }));
app.use(connect.errorHandler());

app.listen(config.port);

console.log('listening on port ' + config.port);