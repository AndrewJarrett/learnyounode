var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'content-type': 'application/json'});

	var parsedUrl = url.parse(req.url, true);
	var json = {};

	if (parsedUrl.pathname == "/api/parsetime" && parsedUrl.query.iso) {
		var iso = parsedUrl.query.iso;
		var date = new Date(iso);
		var hour = date.getHours();
		var min = date.getMinutes();
		var sec = date.getSeconds();
		json.hour = hour;
		json.minute = min;
		json.second = sec;
	}
	else if (parsedUrl.pathname == '/api/unixtime' && parsedUrl.query.iso) {
		var iso = parsedUrl.query.iso;
		var date = new Date(iso);
		var timestamp = date.getTime();
		json.unixtime = timestamp;
	}
	else {
		res.end("Wrong endpoint.");
	}
	res.end(JSON.stringify(json));
});
server.listen(Number(process.argv[2]));
