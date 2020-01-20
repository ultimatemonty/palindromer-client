// This method expects to be called with a context
// containing a `socket` prop representing a Net.Socket class
// @TODO: pass a callback argument so the caller can 
//   determine what to do with the resulting data
const stringReverse = require('./stringReverse');
const Utils = require('./utils');

module.exports = function(data) {
	let response = data.toString();

	// check to see if the solution was sent
	let solution = Utils.getSolution(response);
	if (solution) {
		console.log('The solution is', '\x1b[32m', `${solution}`, '\x1b[0m');
		this.socket.end();
		return;
	}

	let answers = Utils.getAnswers(response);

	console.log(answers);
	this.socket.write(`${answers}\n`);
}