const { testCasesForData } = require('../../test-utils');
const map = require('./map')


describe('map', () => {
    testCasesForData([1, 2, 3])('should apply the operation to every value when given a(n) %s', (type, dataSource) => {
        const result = map(val => val * 2)(dataSource);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(4);
        expect(result.next().value).toBe(6);
    });
});