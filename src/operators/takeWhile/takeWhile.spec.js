const takeWhile = require('./takeWhile');

describe('takeWhile', () => {
    it('should stop emitting values after the predicate returns false the first time', () => {
        const testPredicate = jest.fn();
        testPredicate.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const dataSource = [1, 2, 3];
        const result = takeWhile(testPredicate)(dataSource);
        expect(result.next().value).toBe(1);
        expect(result.next().done).toBeTruthy();
    });
});
