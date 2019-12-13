import { range, primes } from './generators';


describe('range', () => {
    it('should only return values greater than the start', () => {
        const startValue = 2;
        for (const value of range(startValue, 8, 1)) {
            expect(value).toBeGreaterThanOrEqual(startValue);
        }
    });

    it('should only return values less than the start', () => {
        const endValue = 8;
        for (const value of range(0, endValue, 1)) {
            expect(value).toBeLessThanOrEqual(endValue);
        }
    });
});

describe('primes', () => {});
