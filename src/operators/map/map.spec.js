const { testCasesForData, testThatTheResultIsReusable } = require('../../test-utils');
const { map } = require('collection-ops')

describe('map', () => {
    testThatTheResultIsReusable(map(val => val * 2)([1, 2, 3]));

    testCasesForData([1, 2, 3])('should apply the operation to every value when given a(n) %s', (type, dataSource) => {
        const result = map(val => val * 2)(dataSource);
        expect(result).toHaveValues(2, 4, 6);
    });
});