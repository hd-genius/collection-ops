const operators = require('./operators'); 

function testCasesForData(data) {
    function* exampleGenerator() {
        for (const value of data) {
            yield value;
        }
    }
    return test.each([
        ['Array', Array.from(data)],
        ['Set', new Set(data)],
        ['Generator', exampleGenerator()]
    ])
}

describe('filter', () => {
    testCasesForData([1, 2, 3])('should not yield any values that do not meet the predicate when given a(n) %s', (type, dataSource) => {
        const result = operators.filter(val => val % 2 == 0)(dataSource);
        expect(result.next().value).toBe(2);
        expect(result.next().done).toBeTruthy();
    });

    testCasesForData([1, 2, 3])('should yield every value that does meet the predicate when given a(n) %s', (type, dataSource) => {
        const result = operators.filter(val => val < 3)(dataSource);
        expect(result.next().value).toBe(1);
        expect(result.next().value).toBe(2);
        expect(result.next().done).toBeTruthy();
    });
});

describe('map', () => {
    testCasesForData([1, 2, 3])('should apply the operation to every value when given a(n) %s', (type, dataSource) => {
        const result = operators.map(val => val * 2)(dataSource);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(4);
        expect(result.next().value).toBe(6);
    });
});

describe('take', () => {
    testCasesForData([1, 2, 3])('should only return the first number of values that were asked for when given a(n) %s', (type, dataSource) => {
        const result = operators.take(3)(dataSource);
        for (let i = 0; i < 3; i++) {
            result.next();
        }
        expect(result.next().done).toBeTruthy();
    });
});

describe('drop', () => {
    testCasesForData([1, 2, 3, 4, 5])('should skip the requested number of values in the source when given a(n) %s', (type, dataSource) => {
        const result = operators.drop(2)(dataSource);
        for (let i = 3; i <= 5; i++) {
            expect(result.next().value).toEqual(i);
        }
        expect(result.next().done).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4, 5])('should not skip any values when given a number less than or equal to 0 when given a(n) %s', (type, dataSource) => {
        const result = operators.drop(-1)(dataSource);
        for (let i = 1; i <= 5; i++) {
            expect(result.next().value).toEqual(i);
        }
        expect(result.next().done).toBeTruthy();
    });

    it('should create an operation that can be reused multiple times', () => {
        const dataSource = [1, 2, 3, 4, 5];
        const dropOperation = operators.drop(3);
        
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
    })
});