const { count } = require('collection-ops');
const { testCasesForData, testThatTheResultIsReusable } = require('../../test-utils');

describe('count', () => {
    testThatTheResultIsReusable(count([1, 2, 3]));

    testCasesForData([1, 2, 3, 4])(
        'should return the number of values in the source when given a(n) %s',
        (type, dataSource) => {
            const result = count(dataSource);
            expect(result).toBe(4);
        }
    );

    testCasesForData([])(
        'should return 0 if there are no values in the source when given a(n) %s',
        (type, dataSource) => {
            const result = count(dataSource);
            expect(result).toBe(0);
        }
    );
});
