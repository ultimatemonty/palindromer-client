const net = require('net');
const PalindromerClient = require('../client.js');

jest.mock('net');

test('client constructs correctly', () => {
	const testHost = 'test-host';
	const testPort = 1234;
	const testCallback = () => {}

	const client = new PalindromerClient(testPort, testHost, testCallback);
	
	expect(client.host).toBe(testHost);
	expect(client.port).toBe(testPort);
	expect(typeof client.onData).toBe('function');
});

test('init runs', () => {
	const mockOn = jest.fn((event, callback) => {});
	const mockPause = jest.fn(() => {});

	net.createConnection.mockImplementation((port, host) => {
		return {
			host: host,
			port: port,
			pause: mockPause,
			on: mockOn
		}
	});

	const testHost = 'test-host';
	const testPort = 1234;
	const testCallback = () => {}

	const client = new PalindromerClient(testPort, testHost, testCallback);
	client.init();

	expect(client.socket.host).toBe(testHost);
	expect(client.socket.port).toBe(testPort);
	expect(mockPause.mock.calls.length).toBe(1);
	expect(mockOn.mock.calls.length).toBe(2);
	expect(mockOn.mock.calls[0][0]).toBe('data');
	expect(typeof mockOn.mock.calls[0][1]).toBe('function');
	expect(mockOn.mock.calls[1][0]).toBe('error');
	expect(typeof mockOn.mock.calls[1][1]).toBe('function');
});

// test('start runs', () => {
// 	const mockOn = jest.fn((event, callback) => {});
// 	const mockPause = jest.fn(() => {});
// 	const mockResume = jest.fn();

// 	net.createConnection.mockImplementation((port, host) => {
// 		return {
// 			host: host,
// 			port: port,
// 			pause: mockPause,
// 			on: mockOn
// 		}
// 	});

// 	const testHost = 'test-host';
// 	const testPort = 1234;
// 	const testCallback = () => {}

// 	const client = new PalindromerClient(testPort, testHost, testCallback);
// 	client.init();
// });