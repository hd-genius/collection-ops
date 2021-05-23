const { effect } = require('collection-ops');
const { testCasesForData, testThatTheResultIsReusable, testThatTheParametersAreNotModified } = require('../../test-utils');


describe('effect', () => {
    testThatTheResultIsReusable(effect(() => {})([1, 2, 3]));

    testThatTheParametersAreNotModified(effect(() => {}), [1, 2, 3]);

    testCasesForData([1, 2, 3, 4])('should call the side effect for each value yielded when given a(n) %s', (type, dataSource) => {
        const sideEffectFunction = jest.fn();
        for (const value of effect(sideEffectFunction)(dataSource)) {
            expect(sideEffectFunction).toBeCalledWith(value);
        }
    });

    testCasesForData([1, 2, 3, 4])('should only call the side effect when the consumer requests the next value when given a(n) %s', (type, dataSource) => {
        const sideEffectFunction = jest.fn();
        const sourceWithSideEffect = effect(sideEffectFunction)(dataSource)[Symbol.iterator]();

        sourceWithSideEffect.next();
        sourceWithSideEffect.next();

        expect(sideEffectFunction).not.toBeCalledWith(3);
        expect(sideEffectFunction).not.toBeCalledWith(4);
    });

    testCasesForData([1, 2, 3])('should return an iterable with the same values that it received when given a(n) %s', (type, data) => {
        const result = effect(() => {})(data);
        expect(result).toHaveValues(1, 2, 3);
    });
});
