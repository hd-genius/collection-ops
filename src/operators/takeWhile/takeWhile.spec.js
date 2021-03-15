const { takeWhile } = require('collection-ops');
const { testThatTheResultIsReusable } = require('../../test-utils');

describe('takeWhile', () => {
    testThatTheResultIsReusable(takeWhile(x => x < 3)([1, 2, 3]))

    it('should return an operation that stops emitting values once the predicate returns false', () => {
        const testPredicate = jest.fn();
        testPredicate.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const dataSource = [1, 2, 3];
        const result = takeWhile(testPredicate)(dataSource);
        expect(result).toHaveValues(1);
    });
});
