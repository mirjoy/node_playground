var http = require('http');
var cFormatter = require('./connectionFormatter');

var server = http.createServer();
var count = 1;

server.on('request', function(request, response){

	if(request.url != "/favicon.ico"){
		count++;
	}
	response.end("Hello World " + count);
});

server.listen(1412);

console.log("server is running on 1412");

// node is built around events, everything you build is connected to events
	// it listens for events 
// node is a 'nonblocking application', way faster than rails
// rails creates a new thread for each connection