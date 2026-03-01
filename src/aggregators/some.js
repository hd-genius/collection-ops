/**
 * @function every
 * @template T
 * @param {Predicate<T>} predicate A Predicate function to check values against
 * @returns {Aggregator<T, bool>} An aggregator that returns true if any element in the source returns true when passed
 * to the predicate. Returns false if every element returns false.
 */
module.exports = (predicate) => (source) => {
    for (const value of source) {
        if (predicate(value)) {
            return true;
        }
    }
    return false;
};
