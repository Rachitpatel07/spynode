const fs = require('fs');

// fs.unlink('./demo.txt',function(err){
//     if(err) return console.log(err);
//     console.log('file deleted successfully');
// });  

fs.rename("mihir.txt","read.txt",function (err) {
    console.log(err);
})