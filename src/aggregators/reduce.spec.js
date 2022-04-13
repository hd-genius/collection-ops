const { reduce } = require('collection-ops');
const { testCasesForData } = require('../test-utils');

describe('reduce', () => {
    testCasesForData([])('should return the initial value if there are no values in the %s', (type, dataSource) => {
        const initialValue = 3;
        const result = reduce((a, b) => a + b)(initialValue)(dataSource);
        expect(result).toEqual(initialValue);
    });

    testCasesForData([1, 2, 3])('should return the reduced value when given a %s', (type, dataSource) => {
        const result = reduce((a, b) => a + b)(0)(dataSource);
        expect(result).toEqual(6);
    });
});
