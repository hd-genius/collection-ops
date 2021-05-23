const reusable = require('../../helpers/reusable/reusable');

/**
 * An operator that only returns values from the source iterable once
 * @function distinct
 * @template T
 * @type Operator<T, T>
 * @param source the source iterable
 */
module.exports = reusable(
    function *(source) {
        let previousValues = new Set();
        for (const value of source) {
            if (!previousValues.has(value)) {
                previousValues.add(value);
                yield value;
            }
        }
    }
);
