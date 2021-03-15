const { testCasesForData, testThatTheResultIsReusable } = require('../../test-utils');
const { sort } = require('collection-ops');


describe('sort', () => {
    testThatTheResultIsReusable(sort((x, y) => x - y)([1, 5, 4, 2, 3]));

    testCasesForData([4, 2, 3, 5, 1])('should create an operation that sorts values in the correct order when given a(n) %s', (type, dataSource) => {
        const comparator = (x, y) => x - y;

        let expectedValue = 1;
        for (const value of sort(comparator)(dataSource)) {
            expect(value).toEqual(expectedValue);
            expectedValue++;
        }
    });

    it('should create a reusable operation', () => {});
});
