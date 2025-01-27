/* HTTP Server */

var http = require('http');
var url = require('url');

function startServer(host, port, route) {

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

		console.log('Request for ' + pathname + ' received');

		route(pathname);

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Hello World!');
		response.end();
	}

	http.createServer(onRequest).listen(port, host);

	console.log('Server started. Listening on http://' + host + ':' + port + '/');

}

exports.startServer = startServer;