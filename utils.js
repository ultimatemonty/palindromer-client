const stringReverse = require('./stringReverse.js');

module.exports = {
	// handle when the solution arrives
	// the solution is indicated by a response that starts with `!!! flag`
	//   and is contained in brackets after the indicator
	getSolution: function(string) {
		if (string.startsWith('!!! flag')) {
			return string.match(/(?<=\[)(.+)(?=\])/gm)[0];
		}
		return null;
	},

	// handle error cases
	// errors will start with `!!!` and then the error message
	getError: function(string) {
		if (string.startsWith('!!!') && !string.startsWith('!!! flag')) {
			return string.substr(3).trim();
		}
		return null;
	},

	// parses a string for palindromes and returns the results as a string
	getAnswers: function(string) {
		return string.trim().split(' ')
			.filter(word => {
				if (word === stringReverse(word)) {
					return word;
				}
			})
			.join(' ');
	}
};