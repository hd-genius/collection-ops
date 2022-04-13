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
});
