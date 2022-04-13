const { chain } = require('collection-ops');

describe('chain', () => {
    it('should create an operator that applies each operator it was given in order', () => {
        const firstOperator = jest.fn();
        const secondOperator = jest.fn();
        const combined = chain(firstOperator, secondOperator);

        const firstOperatorResult = ['nextValue'];
        firstOperator.mockReturnValue(firstOperatorResult);
        const initialParameter = ['firstValue'];
        combined(initialParameter);

        expect(firstOperator).toHaveBeenCalledWith(initialParameter);
        expect(secondOperator).toHaveBeenCalledWith(firstOperatorResult);
    });

    it('should return the result from the last operator it was given', () => {
        const lastOperator = jest.fn();
        const combined = chain(() => ['Test return'], lastOperator);

        const expectedResult = ['Some value'];
        lastOperator.mockReturnValue(expectedResult);
        const result = combined(['Some input']);

        expect(result).toEqual(expectedResult);
    });
});
