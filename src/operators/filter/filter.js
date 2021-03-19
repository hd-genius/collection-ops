const reusable = require('../../helpers/reusable/reusable');

/**
 * A function that produces an operator that does not emit any elements that do not satisfy the predicate
 * @function filter
 * @template T
 * @param {Predicate<T>} predicate determines if a value from the source iterable will be in the output Iterable
 * @return {Operator<T, T>} a new filter operation that uses predicate
 */
module.exports = predicate => reusable(
    function*(source) {
        for (const value of source) {
            if (predicate(value)) {
                yield value;
            }
        }
    }
);
