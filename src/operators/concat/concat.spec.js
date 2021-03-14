const { concat } = require('collection-ops');

describe('concat', () => {
    test('should return an iterable that includes the values each source iterable in order', () => {
        const result = concat([1, 2, 3], [4, 5]);
        
        expect(result.next().value).toBe(1);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(3);
        expect(result.next().value).toBe(4);
        expect(result.next().value).toBe(5);
    });
});