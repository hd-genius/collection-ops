const { combineOperators } = require('collection-ops');

describe('combineOperators', () => {
    it('should create an operator that applies each operator it was given in order', () => {
        const firstOperator = jest.fn();
        const secondOperator = jest.fn();
        const combined = combineOperators(firstOperator, secondOperator);

        const firstOperatorResult = ['nextValue'];
        firstOperator.mockReturnValue(firstOperatorResult);
        const initialParameter = ['firstValue'];
        combined(initialParameter);

        expect(firstOperator).toHaveBeenCalledWith(initialParameter);
        expect(secondOperator).toHaveBeenCalledWith(firstOperatorResult);
    });

    it.skip('should create a reusable operation', () => {});

});
