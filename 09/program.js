var http = require('http');
var queue = [];
var count = 0;

for (var i = 0; i < process.argv.length - 2; i++) {
	(function (index) {
		http.get(process.argv[index + 2], function (response) {
			var str = "";

			response.setEncoding('utf8');
			response.on("data", function (data) {
				str += data;
			});
			response.on("error", console.error);
			response.on("end", function () {
				count++;
				queue[index] = str;

				if (count == 3) {
					for (var i = 0; i < 3; i++) {
						console.log(queue[i]);
					}
				}
			});
		});
	})(i);
}
