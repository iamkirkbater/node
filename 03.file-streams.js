var fs = require("fs");
// var data = "";
var data = "Learning about Node";

// create writable stream
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');

// mark end of file
writerStream.end();

// create  a readable stream
// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF8');

// readerStream.on('data', function(chunk) {
// 	data+=chunk;
// });

// readerStream.on('end', function() {
// 	console.log(data);
// });

// readerStream.on('error', function(err) {
// 	console.error(err.stack);
// });

console.log("Program Terminated.");