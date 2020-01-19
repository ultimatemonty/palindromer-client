const net = require('net');

const PalindromerClient = function(port, host, onData) {
	this.host = host
	this.port = port;
	this.onData = onData.bind(this);
}

PalindromerClient.prototype.init = function() {
	this.client = net.createConnection(this.port, this.host, () => {
		console.log('connected!');
	});
	this.client.pause();

	this.client.on('data', this.onData);
	this.client.on('error', (error) => {
		console.error(`ERROR: ${error.toString()}`);
	});
}

PalindromerClient.prototype.start = function(data) {
	this.client.resume();
}

module.exports = PalindromerClient;