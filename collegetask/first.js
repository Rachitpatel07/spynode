var fs = require('fs');

fs.writeFile('rachit.txt', 'Hello Rachit How are you ?', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});