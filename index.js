const PalindromerClient = require('./client');
const stringReverse = require('./stringReverse');

const host = 'palindromer-bd7e0fc867d57915.elb.us-east-1.amazonaws.com';
const port = 7777;
const callback = function(data) {
	let response = data.toString();

	// check to see if the solution was sent
	if (response.startsWith('!!! flag')) {
		const solution = response.match(/(?<=\[)(.+)(?=\])/gm)[0];
		console.log('The solution is', '\x1b[32m', `${solution}`, '\x1b[0m');
		this.client.end();
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
	this.client.write(`${answers}\n`);
}

const client = new PalindromerClient(port, host, callback);
client.init();
client.start();
