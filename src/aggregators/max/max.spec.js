const { max } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');


describe('max', () => {
    testCasesForData([1, 2, 3, 4])('should return the largest value in the source when given a(n) %s', (type, dataSource) => {
        const result = max((a, b) => a - b)(dataSource);
        expect(result).toBe(4);
    });

    testCasesForData([3])('should return the first value if there is only one value in the source when given a(n) %s', (type, dataSource) => {
        const result = max((a, b) => a - b)(dataSource);
        expect(result).toBe(3);
    });

    testCasesForData([])('should return undefined if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = max((a, b) => a - b)(dataSource);
        expect(result).toBe(undefined);
    });
});