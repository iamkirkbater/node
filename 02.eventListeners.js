var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function () {
	console.log("listener1 executed");
}

var listener2 = function () {
	console.log("listener2 executed");
}

var listener3 = function () {
	console.log("listener3 executed");
}

//bind the connection event to listener 1
eventEmitter.addListener('connection', listener1);

//bind the connection event to listener2
eventEmitter.on('connection', listener2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" Listener(s) listening to connection event.");

// fire the connection event
eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener1 will not listen now.");

eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners+" Listener(s) listening to connection event.");

console.log("Program Ended");