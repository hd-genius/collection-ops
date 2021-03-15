const reusable = require("../../helpers/reusable/reusable");

/**
 *
 * @function takeWhile
 * @template T
 * @param {Predicate<T>} predicate
 * @returns {Operator<T>} a generator that will emit values until a value does not fulfill the predicate
 */
module.exports = predicate => reusable(
    function*(source) {
        for (const value of source) {
            if (predicate(value)) {
                yield value;
            } else {
                break;
            }
        }
    }
);
