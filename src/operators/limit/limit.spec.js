const { limit } = require ('./limit');
const { testCasesForData } = require('../../test-utils');


describe('limit', () => {
    testCasesForData([1, 2, 3])('should only return the first number of values that were asked for when given a(n) %s', (type, dataSource) => {
        const result = limit(3)(dataSource);
        for (let i = 0; i < 3; i++) {
            result.next();
        }
        expect(result.next().done).toBeTruthy();
    });

    testCasesForData([1, 2, 3])('should return a generator that does not emit any values if the amountToTake parameter is <= 0 when given a(n) %s', (type, datasource) => {
        const result = limit(-1)(datasource);
        expect(result.next().done).toBeTruthy();
    })

    it('should create an operation that can be reused multiple times', () => {
        const dataSource = [1, 2, 3, 4, 5];
        const takeOperation = limit(3);
        
        const firstUsage = takeOperation(dataSource);
        for (let i = 1; i <= 3; i++) {
            expect(firstUsage.next().value).toEqual(i);
        }
        expect(firstUsage.next().done).toBeTruthy();

        const secondUsage = takeOperation(dataSource);
        for (let i = 1; i <= 3; i++) {
            expect(secondUsage.next().value).toEqual(i);
        }
        expect(secondUsage.next().done).toBeTruthy();
    });
});
