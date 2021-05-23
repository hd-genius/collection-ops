const { limit } = require('collection-ops');
const { testCasesForData, testThatTheResultIsReusable, testThatTheParametersAreNotModified } = require('../../test-utils');


describe('limit', () => {
    testThatTheResultIsReusable(limit(2)([1, 2, 3]));

    testThatTheParametersAreNotModified(limit(2), [1, 2, 3]);

    testCasesForData([1, 2, 3])('should only return the first number of values that were asked for when given a(n) %s', (type, dataSource) => {
        const result = limit(3)(dataSource);
        expect(result).toHaveValues(1, 2, 3);
    });

    testCasesForData([1, 2, 3])('should return a generator that does not emit any values if the amountToTake parameter is <= 0 when given a(n) %s', (type, datasource) => {
        const result = limit(-1)(datasource);
        expect(result).toHaveValues();
    });

    it('should create an operation that can be reused multiple times', () => {
        const dataSource = [1, 2, 3, 4, 5];
        const takeOperation = limit(3);

        const firstUsage = takeOperation(dataSource);
        expect(firstUsage).toHaveValues(1, 2, 3);

        const secondUsage = takeOperation(dataSource);
        expect(secondUsage).toHaveValues(1, 2, 3);
    });
});
