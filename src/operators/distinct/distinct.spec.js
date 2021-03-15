const { distinct } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');

describe('distinct', () => {
    testCasesForData([1, 1, 2, 2, 3, 3])('should only return one instance of a given value', (type, data) => {
        const result = distinct(data);
        expect(result).toHaveValues(1, 2, 3);
    });

    testCasesForData([1, 2, 1, 3, 3, 2])('should return each value in the order that they are first found', (type, data) => {
        const result = distinct(data);
        expect(result).toHaveValues(1, 2, 3);
    });
});
