var http = require('http');
var str = "";

http.get(process.argv[2], function (response) {
	response.on("data", function (data) {
		str += data.toString();
	});
	response.on("error", console.error);
	response.on("end", function () {
		console.log(str.length);
		console.log(str);
	})
});
