const min = require('./min');
const { testCasesForData } = require('../../test-utils');


describe('min', () => {
    testCasesForData([1, 2, 3, 4])('should return the smallest value in the source when given a(n) %s', (type, dataSource) => {
        const result = min((a, b) => a - b)(dataSource);
        expect(result).toBe(1);
    });

    testCasesForData([3])('should return the first value if there is only one value in the source when given a(n) %s', (type, dataSource) => {
        const result = min((a, b) => a - b)(dataSource);
        expect(result).toBe(3);
    });

    testCasesForData([])('should return undefined if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = min((a, b) => a - b)(dataSource);
        expect(result).toBeUndefined();
    });
});
