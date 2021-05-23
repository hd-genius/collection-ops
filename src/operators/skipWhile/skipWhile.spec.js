const { skipWhile } = require('collection-ops');
const { testCasesForData, testThatTheResultIsReusable, testThatTheParametersAreNotModified } = require('../../test-utils');

describe('skipWhile', () => {
    testThatTheResultIsReusable(skipWhile(x => x < 3)([1, 2, 3, 4]));

    testThatTheParametersAreNotModified(skipWhile(x => x < 3), [1, 2, 3, 4]);

    testCasesForData([1, 2, 3, 4])('should not emit any values until the predicate fails when given a(n) %s', (type, data) => {
        const result = skipWhile(x => x < 3)(data);
        expect(result).toHaveValues(3, 4);
    });

    testCasesForData([1, 2, 3])('should not emit any values if the predicate never fails when given a(n) %s', (type, data) => {
        const result = skipWhile(() => true)(data);
        expect(result).toHaveValues();
    });

    testCasesForData([1, 2, 3, 4, 5])('should emit all values if the predicate instantly fails when given a(n) %s', (type, data) => {
        const result = skipWhile(() => false)(data);
        expect(result).toHaveValues(1, 2, 3, 4, 5);
    });
});
