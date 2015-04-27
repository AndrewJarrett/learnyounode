var fs = require('fs');

fs.readFile(process.argv[2], {'encoding': 'utf8'}, function (err, file) {
	if (err) throw new Exception("Error reading file!");

	var lines = file.split("\n").length - 1;

	console.log(lines);
});
