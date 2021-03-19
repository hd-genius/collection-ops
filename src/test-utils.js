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
            if (currentStep.done) {
                return failWithMessage(`expected ${expectedValues[i]} but the iterator was finished`);
            } else {
                const actualValue = currentStep.value;
                const expectedValue = expectedValues[i];
                if (actualValue !== expectedValue) {
                    return failWithMessage(`expected the value at index ${i} to be ${expectedValue} but received ${actualValue}`);
                }
            }
        }

        currentStep = iterator.next();

        if (currentStep.done) {
            return passWithMessage('The iterable matched the expected values');
        } else {
            return failWithMessage('The iterable contained more values than expected');
        }
    }
});

function failWithMessage(message) {
    return result(false, message);
}

function passWithMessage(message) {
    return result(true, message);
}

function result(pass, message) {
    return {
        message: () => message,
        pass
    };
}