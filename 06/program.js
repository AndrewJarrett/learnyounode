var mymodule = require('./mymodule.js');

var path = process.argv[2];
var ext = process.argv[3];

mymodule(path, ext, function(err, files) {
	if (err)
		throw new Exception("There was an error reading the directory");

	files.forEach(function (file) {
			console.log(file);
	});
});
