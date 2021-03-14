const { distinct } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');

describe('distinct', () => {
    testCasesForData([1, 1, 2, 2, 3, 3])('should only return one instance of a given value', (type, data) => {
        const result = distinct(data);

        expect(result.next().value).toBe(1);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(3);
    });

    testCasesForData([1, 2, 1, 3, 3, 2])('should return each value in the order that they are first found', (type, data) => {
        const result = distinct(data);

        expect(result.next().value).toBe(1);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(3);
    });

    it('should be reusable', () => {
        const dataSource = [1, 2, 3];

        const firstUsage = distinct(dataSource);
        for (let i = 1; i <= 3; i++) {
            const currentValue = firstUsage.next().value;
            expect(currentValue).toBe(i);
        }
    });
});
