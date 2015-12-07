var fs = require("fs");

// //Async open
// console.log("Opening file.");
// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("File Opened Successfully");
// });

// ----

// //Stat the file
// console.log("Going to stat file:");
// fs.stat('input.txt', function(err, stats) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log(stats);
// 	console.log("File stat'd successfully");
// 	//check file type
// 	console.log("isFile? " + stats.isFile());
// 	console.log("isDirectory? " + stats.isDirectory());
// });

// ----

// 
// // Async read
// fs.readFile('input.txt', function(err,data) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log("Async read: "+data.toString());
// });
// 
// // Syncronous Read
// var data = fs.readFileSync('input.txt');
// console.log("Sync read: "+data.toString());

// ----

// console.log("Going to write into existing file");
// fs.writeFile('output.txt', 'Learning about Node', function(err) {
//   if(err) {
//     return console.error(err);
//   }
//   console.log("File updated successfully");
//   console.log("Updated File is below:");
//   fs.readFile('output.txt', function(err, data) {
//     if(err) {
//     	return console.error(err);
//   	}
//   	console.log("Async read: " +data.toString());
//   });
// });

// ----

// var buf = new Buffer(1024);
// console.log("open existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
//   if(err) {
//     return console.error(err);
//   }
//   console.log("File opened.");
//   
//   console.log("truncating file after 8 bytes.");
//   fs.truncate(fd, 8, function(err) {
//     if(err) {
//       return console.error(err);
//     }
//     console.log("file truncated");
//   
// 	  console.log("Reading file...");
// 	  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
// 		if(err) {
// 		  return console.error(err);
// 		}
// 		console.log("bytes read: "+bytes);
// 	
// 		// print only read bytes to avoid junk
// 		if (bytes > 0) {
// 		  console.log(buf.slice(0, bytes).toString());
// 		}
// 	
// 		fs.close(fd, function(err) {
// 		  if (err) {
// 			return console.error(err);
// 		  }
// 		  console.log('file closed.');
// 		});
// 	  });
//   });
// });

// ----

// console.log("delete a file");
// fs.unlink("input.txt", function(err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("file deleted");
// });

// ----

// console.log("creating a directory ./test");
// fs.mkdir('./test', function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("directory ./test created");
// });

// ----

// console.log("reading current directory");
// fs.readdir("./", function(err, files) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	files.forEach(function (file) {
// 		console.log(file);
// 	});
// });

// ----

// console.log("deleting ./test directory");
// fs.rmdir("./test", function(err) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log("./test directory deleted.");
// });

// ----

function printHello() {
  console.log("Hello World");
}

// var t = setTimeout(printHello, 2000);
// clearTimeout(t);

setInterval(printHello, 2000);



console.log('Program Ended.');