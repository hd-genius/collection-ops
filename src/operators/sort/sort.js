const reusable = require("../../helpers/reusable/reusable");

/**
 * Cannot be used with infinite collections, it will cause an infinite loop.
 * Is not entirely lazily evaluated, all values are pulled from source
 * immediately but are sorted only as requested.
 * @function sort
 * @template T
 * @param {Comparator<T>} comparator
 * @returns {Operator<T, T>} an Operator that emits values from source in
 * the order of largest to smallest using comparator.
 */
module.exports = comparator => reusable(
    function*(source) {
        let remainingValues = Array.from(source);
        while (remainingValues.length > 0) {
            for (let index = remainingValues.length; index > 0; index--) {
                let currentValue = remainingValues[index];
                let nextIndex = index - 1;
                let nextValue = remainingValues[nextIndex];
                if (comparator(currentValue, nextValue) < 0) {
                    remainingValues[index] = nextValue;
                    remainingValues[nextIndex] = currentValue;
                }
            }
            yield remainingValues.shift();
        }
    }
);
