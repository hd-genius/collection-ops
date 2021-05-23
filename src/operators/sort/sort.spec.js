const { testCasesForData,
    testThatTheResultIsReusable,
    testThatTheParametersAreNotModified } = require('../../test-utils');
const { sort } = require('collection-ops');


describe('sort', () => {
    testThatTheResultIsReusable(sort((x, y) => x - y)([1, 5, 4, 2, 3]));

    testThatTheParametersAreNotModified(sort((x, y) => x - y), [1, 4, 3, 7]);

    testCasesForData([4, 2, 3, 5, 1])('should create an operation that sorts values in the correct order when given a(n) %s', (type, dataSource) => {
        const comparator = (x, y) => x - y;
        const result = sort(comparator)(dataSource);
        expect(result).toHaveValues(1, 2, 3, 4, 5);
    });
});
