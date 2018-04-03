const net = require("net");
const parser = require('http-string-parser');

let _data;

// Creating server
net.createServer(function (socket) {
	socket.on('data', function(data) {
		_data = parser.parseRequest(data.toString());
		console.log(_data);
	});

	if (_data == 'hello') {
		socket.write('hi');
	} else {
		socket.write('what?');
	}
	socket.end();
}).listen(9000);
