const { every } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');

describe('every', () => {
    testCasesForData([1, 2, 3])('should return true if every item in an %s passes the given predicate', (type, dataSource) => {
        const result = every(() => true)(dataSource);
        expect(result).toBeTruthy();
    });

    testCasesForData([1, 2, 3])('should return false if any item in an %s fails the given predicate', (type, dataSource) => {
        const result = every(x => x < 3)(dataSource);
        expect(result).toBeFalsy();
    });

    testCasesForData([])('should return true if there are no items in an $s', (type, dataSource) => {
        const result = every(() => false)(dataSource);
        expect(result).toBeTruthy();
    });
});
