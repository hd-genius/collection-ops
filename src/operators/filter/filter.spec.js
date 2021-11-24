const { filter } = require('collection-ops');
const {
    testCasesForData,
    testThatTheResultIsReusable,
    testThatTheParametersAreNotModified,
} = require('../../test-utils');

describe('filter', () => {
    testThatTheResultIsReusable(filter((x) => x < 3)([1, 2, 3]));

    testThatTheParametersAreNotModified(
        filter((x) => x < 3),
        [1, 2, 3]
    );

    testCasesForData([1, 2, 3])(
        'should not yield any values that do not meet the predicate when given a(n) %s',
        (type, dataSource) => {
            const result = filter((val) => val % 2 === 0)(dataSource);
            expect(result).toHaveValues(2);
        }
    );

    testCasesForData([1, 2, 3])(
        'should yield every value that does meet the predicate when given a(n) %s',
        (type, dataSource) => {
            const result = filter((val) => val < 3)(dataSource);
            expect(result).toHaveValues(1, 2);
        }
    );
});
