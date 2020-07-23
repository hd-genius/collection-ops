/**
 * @function distinct
 * @template T
 * @type Operator<T, T>
 * @param source
 * @returns {Generator<any, void, *>}
 */
module.exports = function*(source) {
    let previousValues = new Set();
    for (const value of source) {
        if (!previousValues.has(value)) {
            previousValues.add(value);
            yield value;
        }
    }
};
