const reusable = require("../../helpers/reusable/reusable");

/**
 * @function distinct
 * @template T
 * @type Operator<T, T>
 * @param source
 * @returns {Generator<any, void, *>}
 */
function* distinct(source) {
    let previousValues = new Set();
    for (const value of source) {
        if (!previousValues.has(value)) {
            previousValues.add(value);
            yield value;
        }
    }
};

module.exports = reusable(distinct);
