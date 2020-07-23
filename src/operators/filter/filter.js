/**
 * @function filter
 * @template T
 * @param {Predicate<T>} predicate determines if a value from the source iterable will be in the output Generator
 * @return {Operator<T, T>} a new filter operation that uses predicate
 */
module.exports = predicate => function*(source) {
    for (const value of source) {
        if (predicate(value)) {
            yield value;
        }
    }
};
