var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	var theVar = "hardcoded var =(.";
	theVar = process.env.FOO;
	console.log(process);
	response.write("Behold: a really cool ENV VAR: ." + theVar);
	response.end();
}).listen(8080);
console.log('Listening on port 8080...');
