const { concat } = require('collection-ops');
const { testThatTheResultIsReusable } = require('../../test-utils');

describe('concat', () => {
    testThatTheResultIsReusable(concat([1, 2, 3], [4, 5]));

    test('should return an iterable that includes the values each source iterable in order', () => {
        const result = concat([1, 2, 3], [4, 5]);
        expect(result).toHaveValues(1, 2, 3, 4, 5);
    });
});