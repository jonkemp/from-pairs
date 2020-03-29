const assert = require('assert');
const { toPairs } = require('@jonkemp/package-utils');
const fromPairs = require('./');

describe('fromPairs', () => {
	it('should convert two arrays into an object', () => {
		const result = fromPairs(['moe', 'larry', 'curly'], [30, 40, 50]);
		const shouldBe = {moe: 30, larry: 40, curly: 50};

		assert.deepEqual(result, shouldBe);
	});

	it('should convert an array of pairs into an object', () => {
		const result = fromPairs([['one', 1], ['two', 2], ['three', 3]]);
		const shouldBe = {one: 1, two: 2, three: 3};

		assert.deepEqual(result, shouldBe);
	});

	it('should convert an object converted to pairs back to an object', () => {
		const stooges = {moe: 30, larry: 40, curly: 50};

		assert.deepEqual(fromPairs(toPairs(stooges)), stooges);
	});

	it('should handle nulls', () => {
		assert.deepEqual(fromPairs(null), {});
	});
});
