// console.log("Hello World");
// var http = require("http");

// var port = 8081;
// http.createServer(function(request, response) {
// 	// Send the http header with 200 okay status and content-type of text/plain
// 	response.writeHead(200, {"Content-type": "text/plain"});

// 	// Send the response body as Hello World
// 	response.end('Hello World!!\n');
// }).listen(port);

// console.log("Server Running at localhost:" + port);

//----

// var fs = require("fs");
// // var data = fs.readFileSync("input.txt");
// // console.log(data.toString());

// fs.readFile("input.txt", function(err, data) {
// 	if (err) return console.error(err);

// 	console.log(data.toString());
// });
// console.log("Program Ended");

//----

var events = require("events");
var eventEmitter = new events.EventEmitter();

//create event handler
var connectHandler = function connected() {
	console.log("Connection Successful!");

	eventEmitter.emit("data_received");
}

// bind the connect event with a handler
eventEmitter.on('connection', connectHandler);

// bind data received event with anon func
eventEmitter.on('data_received', function() {
	console.log("Data received Successfully.");
});

// Fire the connection event
eventEmitter.emit('connection');
console.log('End of Program');