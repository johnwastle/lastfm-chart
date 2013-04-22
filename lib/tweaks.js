module.exports = function() {
    return function(req, res, next) {
        res.redirect = function(uri) {
            var status = 302
              ;

            if (2 == arguments.length) {
                status = uri;
                uri = arguments[1];
            }

            res.writeHead(status, { 'Location' : uri });
            res.end();
        }

        res.json = function(obj, status) {
            var headers = { 'Content-Type' : 'application/json' }
              ;

            status = status || 200;

            if (3 == arguments.length) {
                headers = status;
                status = arguments[2];
            }

            body = JSON.stringify(obj || {});

            if (req.query.callback) {
                body = "callback(" + body + ");";
            }

            return this.send(body, headers, status);
        }

        res.send = function(body, status) {
            var headers = { 'Content-Type' : 'text/html' }
              ;

            status = status || 200;

            if (3 == arguments.length) {
                headers = status;
                status = arguments[2];
            }

            res.writeHead(status, headers);
            res.end(body);
        }

        next();
    }
}