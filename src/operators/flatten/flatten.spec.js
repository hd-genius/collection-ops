const { flatten } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');

describe('flatten', () => {
    testCasesForData([[1, 2, 3], [4, 5]])('should emit each value in the nested iterables in order', (type, data) => {
        expect(flatten(data)).toHaveValues(1, 2, 3, 4, 5);
    });

    testCasesForData([[1, 2, 3], 4])('should emit any values that are not an iterable', (type, data) => {
        expect(flatten(data)).toHaveValues(1, 2, 3, 4);
    });
});