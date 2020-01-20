const Utils = require('../utils.js');

describe('getSolution', () => {
	test('it handles a solution flag', () => {
		const solution = 'test solution';
		const solutionFlag = `!!! flag[${solution}]`;

		const actual = Utils.getSolution(solutionFlag);
		expect(actual).toBe(solution);
	});

	test('it handles a non-flag', () => {
		const notAFlag = 'wat';

		const actual = Utils.getSolution(notAFlag);
		expect(actual).toBeNull();
	});
});

describe('getError', () => {
	test('it handles an error flag', () => {
		const error = 'test error';
		const errorFlag = `!!! ${error}`;
		
		const actual = Utils.getError(errorFlag);
		expect(actual).toBe(error);
	});

	test('it handles a solution flag', () => {
		const solutionFlag = '!!! flag[not an error]';

		const actual = Utils.getError(solutionFlag);
		expect(actual).toBeNull();
	});

	test('it handles a non-flag', () => {
		const notAFlag = 'wat';

		const actual = Utils.getError(notAFlag);
		expect(actual).toBeNull();
	});
});

describe('getAnswers', () => {
	test('it gets the correct answers when they exist', () => {
		const string = 'oliabtahkrz agmmga ipaasqzwulq cptphmfdf wuqjadajquw pawkqqiigo iccmhjc pjadmsmdajp judpjpduj';
		const expected = 'agmmga wuqjadajquw pjadmsmdajp judpjpduj';

		const actual = Utils.getAnswers(string);
		expect(actual).toBe(expected);
	});
});

