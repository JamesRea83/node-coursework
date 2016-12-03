var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = requestHandlers.timeStamper;

server.start(router.route, handle);