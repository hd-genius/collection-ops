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
