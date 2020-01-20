const stringReverse = require('../stringReverse.js');

test('stringReverse', () => {
	const stringtoReverse = 'abcdef';
	const expected = 'fedcba';
	const actual = stringReverse(stringtoReverse);
	expect(actual).toBe(expected);
});