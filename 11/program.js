var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));
