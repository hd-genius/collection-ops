const { skip } = require('collection-ops');
const { testCasesForData, testThatTheResultIsReusable } = require('../../test-utils');

describe('skip', () => {
    testThatTheResultIsReusable(skip(2)([1, 2, 3, 4, 5]));

    testCasesForData([1, 2, 3, 4, 5])('should skip the requested number of values in the source when given a(n) %s', (type, dataSource) => {
        const result = skip(2)(dataSource);
        expect(result).toHaveValues(3, 4, 5);
    });

    testCasesForData([1, 2, 3, 4, 5])('should not skip any values when given a number less than or equal to 0 when given a(n) %s', (type, dataSource) => {
        const result = skip(-1)(dataSource);
        expect(result).toHaveValues(1, 2, 3, 4, 5);
    });

    it('should create an operation that can be reused multiple times', () => {
        const dataSource = [1, 2, 3, 4, 5];
        const dropOperation = skip(3);

        const firstUsage = dropOperation(dataSource);
        expect(firstUsage).toHaveValues(4, 5);

        const secondUsage = dropOperation(dataSource);
        expect(secondUsage).toHaveValues(4, 5);
    });
});
