var net = require("net");

// Creating server
net.createServer(function (socket) {
	socket.on('data', function(data) {
		console.log(data.toString());
	});
}).listen(9000);
