// Creates test cases for the different data types
exports.testCasesForData = data => {
    function* exampleGenerator() {
        for (const value of data) {
            yield value;
        }
    }
    return test.each([
        ['Array', Array.from(data)],
        ['Set', new Set(data)],
        ['Generator', exampleGenerator()]
    ])
};

// Tests that an iterable can be iterated over multiple times and return the same values
exports.testThatTheResultIsReusable = result => {
    it('should produce a result that can be iterated on multiple times', () => {
        const firstIteration = Array.from(result);
        const secondIteration = Array.from(result);

        expect(firstIteration).toEqual(secondIteration);
    });
};

exports.testThatTheParametersAreNotModified = (operator, ...parameters) => {
    it('should not modify the data that is passed into it', () => {
        // Used to achieve a 'deep copy' of the original parameters
        const originalData = JSON.parse(JSON.stringify(parameters));
        operator(...parameters);
        expect(parameters).toEqual(originalData);
    })
}

expect.extend({
    toHaveValues(iterable, ...expectedValues) {
        const iterator = iterable[Symbol.iterator]();

        let currentStep;
        for(let i = 0; i < expectedValues.length; i++) {
            currentStep = iterator.next();
            const value = currentStep.value;
            if (currentStep.done) {
                return {
                    message: () => `expected ${value} but the iterator was finished`,
                    pass: false
                };
            } else {
                if (value !== expectedValues[i]) {
                    return {
                        message: () => `expected the value at index ${i} to be ${expectedValues[i]} but received ${value}`,
                        pass: false
                    };
                }
            }
        }

        currentStep = iterator.next();

        if (currentStep.done) {
            return {
                message: () => 'The iterable matched the expected values',
                pass: true
            };
        } else {
            return {
                message: () => 'The iterable contained more values than expected',
                pass: false
            };
        }
    }
});
