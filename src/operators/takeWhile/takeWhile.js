const reusable = require('../../helpers/reusable/reusable');

/**
 *
 * @function takeWhile
 * @template T
 * @param {Predicate<T>} predicate the predicate used to determine how long to take items from the source
 * @returns {Operator<T, T>} an Operator that will emit values until a value in the source iterable does not fulfill the
 * predicate
 */
module.exports = (predicate) =>
    reusable(function* (source) {
        for (const value of source) {
            if (predicate(value)) {
                yield value;
            } else {
                break;
            }
        }
    });
