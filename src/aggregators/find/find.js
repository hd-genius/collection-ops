/**
 * @function find
 * @template T
 * @param {Predicate<T>} predicate A Predicate function to check values against
 * @return {Aggregator<T, T>} An aggregator that returns the first value in an iterable that satisfies the predicate
 */
module.exports = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return value;
        }
    }
    return null;
}
