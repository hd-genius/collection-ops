const library = require("./index");

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
        const result = library.filter(val => val % 2 == 0)(dataSource);
        expect(result.next().value).toBe(2);
        expect(result.next().done).toBeTruthy();
    });

    testCasesForData([1, 2, 3])('should yield every value that does meet the predicate when given a(n) %s', (type, dataSource) => {
        const result = library.filter(val => val < 3)(dataSource);
        expect(result.next().value).toBe(1);
        expect(result.next().value).toBe(2);
        expect(result.next().done).toBeTruthy();
    });
});

describe('map', () => {
    testCasesForData([1, 2, 3])('should apply the operation to every value when given a(n) %s', (type, dataSource) => {
        const result = library.map(val => val * 2)(dataSource);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(4);
        expect(result.next().value).toBe(6);
    });
});

describe('take', () => {
    testCasesForData([1, 2, 3])('should return the first 3 values when given a(n) %s', (type, dataSource) => {
        const result = library.take(3)(dataSource);
        for (let i = 0; i < 3; i++) {
            result.next();
        }
        expect(result.next().done).toBeTruthy();
    });
});

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


describe('min', () => {
    testCasesForData([1, 2, 3, 4])('should return the smallest value in the source when given a(n) %s', (type, dataSource) => {
        const result = library.min((a, b) => a - b)(dataSource);
        expect(result).toBe(1);
    });

    testCasesForData([3])('should return the first value if there is only one value in the source when given a(n) %s', (type, dataSource) => {
        const result = library.min((a, b) => a - b)(dataSource);
        expect(result).toBe(3);
    });

    testCasesForData([])('should return undefined if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = library.min((a, b) => a - b)(dataSource);
        expect(result).toBe(undefined);
    });
});

describe('max', () => {
    testCasesForData([1, 2, 3, 4])('should return the largest value in the source when given a(n) %s', (type, dataSource) => {
        const result = library.max((a, b) => a - b)(dataSource);
        expect(result).toBe(4);
    });

    testCasesForData([3])('should return the first value if there is only one value in the source when given a(n) %s', (type, dataSource) => {
        const result = library.max((a, b) => a - b)(dataSource);
        expect(result).toBe(3);
    });

    testCasesForData([])('should return undefined if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = library.max((a, b) => a - b)(dataSource);
        expect(result).toBe(undefined);
    });
});

describe('count', () => {
    testCasesForData([1, 2, 3, 4])('should return the number of values in the source when given a(n) %s', (type, dataSource) => {
        const result = library.count(dataSource);
        expect(result).toBe(4);
    });

    testCasesForData([])('should return 0 if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = library.count(dataSource);
        expect(result).toBe(0);
    });
});

describe('some', () => {
    testCasesForData([1, 2, 3, 4])('should return true if any value fulfills the predicate when given a(n) %s', (type, dataSource) => {
        const result = library.some(x => x == 2)(dataSource);
        expect(result).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4])('should return false if no value fulfills the predicate when given a(n) %s', (type, dataSource) => {
        const result = library.some(x => x == 5)(dataSource);
        expect(result).toBeFalsy();
    });

    testCasesForData([])('should return false if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = library.some(x => x == 5)(dataSource);
        expect(result).toBeFalsy();
    });
});

describe('none', () => {
    testCasesForData([1, 2, 3, 4])('should return false if any value fulfils the predicate when given a(n) %s', (type, dataSource) => {
        const result = library.none(x => x == 2)(dataSource);
        expect(result).toBeFalsy();
    });

    testCasesForData([1, 2, 3, 4])('should return true if no value fulfils the predicate when given a(n) %s', (type, dataSource) => {
        const result = library.none(x => x == 5)(dataSource);
        expect(result).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4])('should return true if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = library.none(x => x == 5)(dataSource);
        expect(result).toBeTruthy();
    });
});

describe('range', () => {
    it('should only return values greater than the start', () => {
        const startValue = 2;
        for (const value of library.range(startValue, 8, 1)) {
            expect(value).toBeGreaterThanOrEqual(startValue);
        }
    });

    it('should only return values less than the end', () => {
        const endValue = 8;
        for (const value of library.range(0, endValue, 1)) {
            expect(value).toBeLessThanOrEqual(endValue);
        }
    });

    it.skip('should increase the value by step each time', () => {});
});

describe('primes', () => {
    it('should produce the expected prime numbers', () => {
        const firstPrimes = [];
        for (const prime of library.primes()) {
            if (firstPrimes.length) {
                expect(prime).toBe(firstPrimes.shift());
            } else {
                break;
            }
        }
    })
});
