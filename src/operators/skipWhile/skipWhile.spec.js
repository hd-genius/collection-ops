const { skipWhile } = require('collection-ops');
const { testCasesForData, testThatTheResultIsReusable } = require('../../test-utils');

describe('skipWhile', () => {
    testThatTheResultIsReusable(skipWhile(x => x < 3)([1, 2, 3, 4]));

    testCasesForData([1, 2, 3, 4])('should not emit any values until the predicate fails when given a(n) %s', (type, data) => {
        const result = skipWhile(x => x < 3)(data);
        expect(result).toHaveValues(3, 4);
    });

    testCasesForData([1, 2, 3])('should not emit any values if the predicate never fails', (type, data) => {
        const result = skipWhile(x => true)(data);
        expect(result).toHaveValues();
    });
});