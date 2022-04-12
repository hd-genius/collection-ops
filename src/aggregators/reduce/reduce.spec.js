const { reduce } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');

describe('reduce', () => {
    testCasesForData([])('should return the initial value if there are no values in the %s', (type, dataSource) => {
        const initialValue = 3;
        const result = reduce((a, b) => a + b)(initialValue)(dataSource);
        expect(result).toEqual(initialValue);
    });
});
