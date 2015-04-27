var net = require('net');

var server = net.createServer(function (socket) {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	month = (""+month).length == 1 ? "0"+month : month;
	var day = date.getDate();
	day = (""+day).length == 1 ? "0"+day : day;
	var hour = date.getHours();
	var min = date.getMinutes();
	var formattedDate = year + "-" + month + "-" + day + " " + hour + ":" + min + "\n";

	socket.write(formattedDate);
	socket.end();
});
server.listen(process.argv[2]);
