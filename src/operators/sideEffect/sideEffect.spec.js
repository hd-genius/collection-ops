const { sideEffect } = require('collection-ops');
const { testCasesForData } = require('../../test-utils');


describe('sideEffect', () => {
    testCasesForData([1, 2, 3, 4])('should call the side effect for each value yielded when given a(n) %s', (type, dataSource) => {
        const sideEffectFunction = jest.fn();
        for (const value of sideEffect(sideEffectFunction)(dataSource)) {
            expect(sideEffectFunction).toBeCalledWith(value);
        }
    });

    testCasesForData([1, 2, 3, 4])('should only call the side effect when the consumer requests the next value when given a(n) %s', (type, dataSource) => {
        const sideEffectFunction = jest.fn();
        const sourceWithSideEffect = sideEffect(sideEffectFunction)(dataSource);

        sourceWithSideEffect.next();
        sourceWithSideEffect.next();

        expect(sideEffectFunction).not.toBeCalledWith(3);
        expect(sideEffectFunction).not.toBeCalledWith(4);
    });
});
