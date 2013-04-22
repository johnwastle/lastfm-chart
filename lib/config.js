var cloudfoundry = require("cloudfoundry");

exports.port = (cloudfoundry.port || 8000);
exports.host = (cloudfoundry.host || 'localhost');

