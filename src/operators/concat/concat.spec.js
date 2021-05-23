const { concat } = require('collection-ops');
const { testThatTheResultIsReusable, testThatTheParametersAreNotModified } = require('../../test-utils');

describe('concat', () => {
    testThatTheResultIsReusable(concat([1, 2, 3], [4, 5]));

    testThatTheParametersAreNotModified(concat, [1, 2, 3], [4, 5]);

    it('should return an iterable that includes the values each source iterable in order', () => {
        const result = concat([1, 2, 3], [4, 5]);
        expect(result).toHaveValues(1, 2, 3, 4, 5);
    });
});
