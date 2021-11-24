/**
 * @function
 * @template T
 * @param {Comparator<T>} comparator the comparator used to find the largest value
 * @returns {Aggregator<T, T>} an Aggregator that finds the largest value in the source
 */
module.exports = (comparator) => (source) => {
    let isFirstValue = true;
    let currentMax;
    for (const value of source) {
        if (isFirstValue) {
            currentMax = value;
            isFirstValue = false;
        } else if (comparator(currentMax, value) < 0) {
            currentMax = value;
        }
    }
    return currentMax;
};
