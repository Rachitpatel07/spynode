
const fs = require('fs');
fs.open('demo.txt', function (err, fileToRead) {
	if (err) {
		return console.error(err);
	}
	fs.readFile(fileToRead, {encoding: 'utf-8'}, function(err,data){
		fs.writeFileSync('demo.txt', data+'rachit patel');
	});
	
});
