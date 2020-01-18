const net = require('net');

const host = 'palindromer-bd7e0fc867d57915.elb.us-east-1.amazonaws.com';
const port = 7777;

const client = net.createConnection(port, host, () => {
	console.log('connected!');
});

client.on('data', (data) => {
	let response = data.toString();

	// check to see if the solution was sent
	if (response.startsWith('!!! flag')) {
		const solution = response.match(/(?<=\[)(.+)(?=\])/gm)[0];
		console.log(`The solution is ${solution}`);
		client.end();
		return;
	}

	let answers = response.trim().split(' ')
			.filter(word => {
				if (word === stringReverse(word)) {
					return word;
				}
			})
			.join(' ');

  console.log(answers);
	client.write(`${answers}\n`);
});

const stringReverse = function(string) {
	return Array.from(string).reverse().join('');
}