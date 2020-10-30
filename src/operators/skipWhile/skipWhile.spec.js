const { skipWhile } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');

describe('skipWhile', () => {
    testCasesForData([1, 2, 3, 4])('should not emit any values until the predicate fails when given a(n) %s', (type, data) => {
        const result = skipWhile(x => x < 3)(data);

        expect(result.next().value).toBe(3);
        expect(result.next().value).toBe(4);
    });

    it('should not emit any values if the predicate never succeeds', () => {});
});