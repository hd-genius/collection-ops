const filter = require('./filter');
const { testCasesForData } = require('../../test-utils');


describe('filter', () => {
    testCasesForData([1, 2, 3])('should not yield any values that do not meet the predicate when given a(n) %s', (type, dataSource) => {
        const result = filter(val => val % 2 == 0)(dataSource);
        expect(result.next().value).toBe(2);
        expect(result.next().done).toBeTruthy();
    });

    testCasesForData([1, 2, 3])('should yield every value that does meet the predicate when given a(n) %s', (type, dataSource) => {
        const result = filter(val => val < 3)(dataSource);
        expect(result.next().value).toBe(1);
        expect(result.next().value).toBe(2);
        expect(result.next().done).toBeTruthy();
    });
});