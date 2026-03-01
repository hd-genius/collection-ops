/**
 * @function every
 * @template T
 * @param {Predicate<T>} predicate A Predicate function to check values against
 * @returns {Aggregator<T, bool>} An aggregator that returns true if every element in the source returns false when passed
 * to the predicate. Returns false if even a single element returns true.
 */
module.exports = (predicate) => (source) => {
    for (const value of source) {
        if (predicate(value)) {
            return false;
        }
    }
    return true;
};
