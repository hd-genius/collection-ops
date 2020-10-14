const { distinct } = require('collection-ops');

describe('distinct', () => {
    it('should be reusable', () => {
        const dataSource = [1, 2, 3];

        const firstUsage = distinct(dataSource);
        for (let i = 1; i <= 3; i++) {
            const currentValue = firstUsage.next().value;
            expect(currentValue).toBe(i);
        }
    })
})
