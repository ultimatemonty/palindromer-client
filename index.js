const PalindromerClient = require('./client');
const handleResponse = require('./handleResponse.js');

const host = 'palindromer-bd7e0fc867d57915.elb.us-east-1.amazonaws.com';
const port = 7777;

const client = new PalindromerClient(port, host, handleResponse);
client.init();
client.start();
