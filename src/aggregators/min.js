const max = require('./max');

/**
 * @function
 * @template T
 * @param {Comparator<T>} comparator the comparator used to find the largest value
 * @returns {Aggregator<T, T>} an Aggregator that finds the smallest value in the source
 */
module.exports = (comparator) => {
    const inverseComparator = (x) => 0 - comparator(x);
    return max(inverseComparator);
};
