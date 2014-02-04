
var config = require('config');

var server = require('./server');
var router = require('./router');

server.startServer(config.http.host, config.http.port, router.route);