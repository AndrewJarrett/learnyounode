var fs = require('fs');
var p = require('path');

module.exports = function(path, ext, callback) {
	if (!path && !ext) callback("Provide a path name and extension!");

	fs.readdir(path, function (err, dir) {
		if (err)
			return callback(err);

		var files = dir.filter(function(file) {
			return p.extname(file) === "."+ext;
		});
		callback(null, files);
	});
}
