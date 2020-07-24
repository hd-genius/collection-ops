const takeWhile = require('./takeWhile');

describe('takeWhile', () => {
    it('should return an operation that stops emitting values once the predicate returns false', () => {
        const testPredicate = jest.fn();
        testPredicate.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const dataSource = [1, 2, 3];
        const result = takeWhile(testPredicate)(dataSource);
        expect(result.next().value).toBe(1);
        expect(result.next().done).toBeTruthy();
    });
});
