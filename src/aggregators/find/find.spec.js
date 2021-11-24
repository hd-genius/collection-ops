const { find } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');

describe('find', () => {
    testCasesForData([1, 2, 3])(
        'should return the first value in an iterable that satisfies the predicate when given a(n) %s',
        (type, data) => {
            const result = find((x) => x > 1)(data);
            expect(result).toEqual(2);
        }
    );

    testCasesForData([1, 2, 3])(
        'should return null if no value satisfies the predicate when given a(n) %s',
        (type, data) => {
            const result = find((x) => x > 4)(data);
            expect(result).toBeNull();
        }
    );
});
