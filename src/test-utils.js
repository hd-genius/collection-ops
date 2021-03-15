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
    test('should produce a result that can be iterated on multiple times', () => {
        const firstIteration = Array.from(result);
        const secondIteration = Array.from(result);

        expect(firstIteration).toEqual(secondIteration);
    });
};
