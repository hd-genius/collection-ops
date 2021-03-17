const { takeWhile } = require('collection-ops');
const { testThatTheResultIsReusable, testThatTheParametersAreNotModified, testCasesForData } = require('../../test-utils');

describe('takeWhile', () => {
    testThatTheResultIsReusable(takeWhile(x => x < 3)([1, 2, 3]));

    testThatTheParametersAreNotModified(takeWhile(x => x < 2), [1, 2, 3]);

    testCasesForData([1, 2, 3])('should return an operation that stops emitting values once the predicate returns false when given a(n) %s', (type, data) => {
        const testPredicate = jest.fn();
        testPredicate.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const result = takeWhile(testPredicate)(data);
        expect(result).toHaveValues(1);
    });

    testCasesForData([1, 8, 3, 4, 2])('should not emit values after the predicate fails when given a(n) %s', (type, data) => {
        const result = takeWhile(x => x < 6)(data);
        expect(result).toHaveValues(1);
    });
});
