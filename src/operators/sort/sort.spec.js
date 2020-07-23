const { testCasesForData } = require('../../test-utils');
const sort = require('./sort');


describe('sort', () => {
    testCasesForData([4, 2, 3, 5, 1])('should sort in the correct order', (type, dataSource) => {
        const comparator = (x, y) => x - y;

        let expectedValue = 1;
        for (const value of sort(comparator)(dataSource)) {
            expect(value).toEqual(expectedValue);
            expectedValue++;
        }
    });

    it('should create a reusable operation', () => {});
});