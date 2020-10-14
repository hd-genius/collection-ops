const { skip } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');

describe('skip', () => {
    testCasesForData([1, 2, 3, 4, 5])('should skip the requested number of values in the source when given a(n) %s', (type, dataSource) => {
        const result = skip(2)(dataSource);
        for (let i = 3; i <= 5; i++) {
            expect(result.next().value).toEqual(i);
        }
        expect(result.next().done).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4, 5])('should not skip any values when given a number less than or equal to 0 when given a(n) %s', (type, dataSource) => {
        const result = skip(-1)(dataSource);
        for (let i = 1; i <= 5; i++) {
            expect(result.next().value).toEqual(i);
        }
        expect(result.next().done).toBeTruthy();
    });

    it('should create an operation that can be reused multiple times', () => {
        const dataSource = [1, 2, 3, 4, 5];
        const dropOperation = skip(3);

        const firstUsage = dropOperation(dataSource);
        for (let i = 4; i <= 5; i++) {
            expect(firstUsage.next().value).toEqual(i);
        }
        expect(firstUsage.next().done).toBeTruthy();

        const secondUsage = dropOperation(dataSource);
        for (let i = 4; i <= 5; i++) {
            expect(secondUsage.next().value).toEqual(i);
        }
        expect(secondUsage.next().done).toBeTruthy();
    });
});
