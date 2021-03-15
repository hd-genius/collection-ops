let aggregators = require('./aggregators');
const { testCasesForData } = require('../test-utils');


describe('min', () => {
    testCasesForData([1, 2, 3, 4])('should return the smallest value in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.min((a, b) => a - b)(dataSource);
        expect(result).toBe(1);
    });

    testCasesForData([3])('should return the first value if there is only one value in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.min((a, b) => a - b)(dataSource);
        expect(result).toBe(3);
    });

    testCasesForData([])('should return undefined if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.min((a, b) => a - b)(dataSource);
        expect(result).toBe(undefined);
    });
});

describe('max', () => {
    testCasesForData([1, 2, 3, 4])('should return the largest value in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.max((a, b) => a - b)(dataSource);
        expect(result).toBe(4);
    });

    testCasesForData([3])('should return the first value if there is only one value in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.max((a, b) => a - b)(dataSource);
        expect(result).toBe(3);
    });

    testCasesForData([])('should return undefined if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.max((a, b) => a - b)(dataSource);
        expect(result).toBe(undefined);
    });
});

describe('count', () => {
    testCasesForData([1, 2, 3, 4])('should return the number of values in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.count(dataSource);
        expect(result).toBe(4);
    });

    testCasesForData([])('should return 0 if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.count(dataSource);
        expect(result).toBe(0);
    });
});

describe('some', () => {
    testCasesForData([1, 2, 3, 4])('should return true if any value fulfills the predicate when given a(n) %s', (type, dataSource) => {
        const result = aggregators.some(x => x === 2)(dataSource);
        expect(result).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4])('should return false if no value fulfills the predicate when given a(n) %s', (type, dataSource) => {
        const result = aggregators.some(x => x === 5)(dataSource);
        expect(result).toBeFalsy();
    });

    testCasesForData([])('should return false if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.some(x => x === 5)(dataSource);
        expect(result).toBeFalsy();
    });
});

describe('none', () => {
    testCasesForData([1, 2, 3, 4])('should return false if any value fulfils the predicate when given a(n) %s', (type, dataSource) => {
        const result = aggregators.none(x => x === 2)(dataSource);
        expect(result).toBeFalsy();
    });

    testCasesForData([1, 2, 3, 4])('should return true if no value fulfils the predicate when given a(n) %s', (type, dataSource) => {
        const result = aggregators.none(x => x === 5)(dataSource);
        expect(result).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4])('should return true if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.none(x => x === 5)(dataSource);
        expect(result).toBeTruthy();
    });
});
