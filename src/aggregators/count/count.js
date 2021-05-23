/**
 * @function count
 * @template T
 * @param {Iterable<T>} source The iterable to count
 * @return {number} The number of elements in the source
 */
module.exports = function (source) {
    let count = 0;
    // eslint-disable-next-line no-unused-vars
    for (const value of source) {
        count++;
    }
    return count;
};
