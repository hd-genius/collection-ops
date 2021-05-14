/**
 * @function count
 * @template T
 * @param {Iterable<T>} source The iterable to count
 * @return {number} The number of elements in the source
 */
module.exports = function(source) {
    let count = 0;
    for (const value of source) {
        count++;
    }
    return count;
}