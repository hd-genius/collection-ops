let generators = require('./generators');

describe('range', () => {
    it('should only return values greater than the start', () => {
        const startValue = 2;
        for (const value of generators.range(startValue, 8, 1)) {
            expect(value).toBeGreaterThanOrEqual(startValue);
        }
    });

    it('should only return values less than the end', () => {
        const endValue = 8;
        for (const value of generators.range(0, endValue, 1)) {
            expect(value).toBeLessThanOrEqual(endValue);
        }
    });

    it.skip('should increase the value by step each time', () => {});
});

describe('primes', () => {
    it('should produce the expected prime numbers', () => {
        const expectedPrimes = [2, 3, 5, 7];
        for (const prime of generators.primes()) {
            if (expectedPrimes.length) {
                expect(prime).toBe(expectedPrimes.shift());
            } else {
                break;
            }
        }
    })
});