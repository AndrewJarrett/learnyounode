var fs = require('fs');
var p = require('path');

var path = process.argv[2];
var ext = process.argv[3];

if (!path && !ext) throw new Exception("Provide a path name and extension!");

fs.readdir(path, function (err, dir) {
	if (err) throw new Exception("Couldn't read directory");
	dir.forEach(function (file) {
		var fileExt = p.extname(file);
		if (fileExt == "."+ext) {
			console.log(file);
		}
	});
});
