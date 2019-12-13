import { filter, map, take, count, min, max, some, none } from "./operators";

function testCasesForData(data) {
    const exampleArray = Array.from(data);
    function* exampleGenerator() {
        for (const value of data) {
            yield value;
        }
    }
    return test.each([
        ['Array', exampleArray],
        ['Generator', exampleGenerator()]
    ])
}

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

describe('map', () => {
    testCasesForData([1, 2, 3])('should apply the operation to every value when given a(n) %s', (type, dataSource) => {
        const result = map(val => val * 2)(dataSource);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(4);
        expect(result.next().value).toBe(6);
    });
});

describe('take', () => {
    testCasesForData([1, 2, 3])('should return the first 3 values when given a(n) %s', (type, dataSource) => {
        const result = take(3)(dataSource);
        for (let i = 0; i < 3; i++) {
            result.next();
        }
        expect(result.next().done).toBeTruthy();
    });
});

describe('min', () => {
    testCasesForData([1, 2, 3, 4])('should return the smallest value in the source when given a(n) %s', (type, dataSource) => {
        const result = min((a, b) => a - b)(dataSource);
        expect(result).toBe(1);
    });

    testCasesForData([3])('should return the first value if there is only one value in the source when given a(n) %s', (type, dataSource) => {
        const result = min((a, b) => a - b)(dataSource);
        expect(result).toBe(3);
    });

    testCasesForData([])('should return undefined if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = min((a, b) => a - b)(dataSource);
        expect(result).toBe(undefined);
    });
});

describe('max', () => {
    testCasesForData([1, 2, 3, 4])('should return the largest value in the source when given a(n) %s', (type, dataSource) => {
        const result = max((a, b) => a - b)(dataSource);
        expect(result).toBe(4);
    });

    testCasesForData([3])('should return the first value if there is only one value in the source when given a(n) %s', (type, dataSource) => {
        const result = min((a, b) => a - b)(dataSource);
        expect(result).toBe(3);
    });

    testCasesForData([])('should return undefined if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = min((a, b) => a - b)(dataSource);
        expect(result).toBe(undefined);
    });
});

describe('count', () => {
    testCasesForData([1, 2, 3, 4])('should return the number of values in the source when given a(n) %s', (type, dataSource) => {
        const result = count(dataSource);
        expect(result).toBe(4);
    });

    testCasesForData([])('should return 0 if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = count(dataSource);
        expect(result).toBe(0);
    });
});

describe('some', () => {
    testCasesForData([1, 2, 3, 4])('should return true if any value fullfills the predicate when given a(n) %s', (type, dataSource) => {
        const result = some(x => x == 2)(dataSource);
        expect(result).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4])('should return false if no value fullfills the predicate when given a(n) %s', (type, dataSource) => {
        const result = some(x => x == 5)(dataSource);
        expect(result).toBeFalsy();
    });

    testCasesForData([])('should return false if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = some(x => x == 5)(dataSource);
        expect(result).toBeFalsy();
    });
});

describe('none', () => {
    testCasesForData([1, 2, 3, 4])('should return false if any value fulfils the predicate when given a(n) %s', (type, dataSource) => {
        const result = none(x => x == 2)(dataSource);
        expect(result).toBeFalsy();
    });

    testCasesForData([1, 2, 3, 4])('should return true if no value fulfils the predicate when given a(n) %s', (type, dataSource) => {
        const result = none(x => x == 5)(dataSource);
        expect(result).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4])('should return true if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = none(x => x == 5)(dataSource);
        expect(result).toBeTruthy();
    });
});