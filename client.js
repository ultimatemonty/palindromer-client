const net = require('net');

const PalindromerClient = function(port, host, onData) {
	this.host = host
	this.port = port;
	this.onData = typeof onData === 'function'
		? onData.bind(this)
		: () => {};
}

PalindromerClient.prototype.init = function() {
	this.socket = net.createConnection(this.port, this.host, () => {
		console.log('connected!');
	});
	this.socket.pause();

	this.socket.on('data', this.onData);
	this.socket.on('error', (error) => {
		console.error(`ERROR: ${error.toString()}`);
	});
}

PalindromerClient.prototype.start = function(data) {
	this.socket.resume();
}

module.exports = PalindromerClient;