/**
 * @function limit
 * @template T
 * @param {number} amountToTake
 * @returns {Operator<T>} an Operation that will only yield upto count values
 */
exports.limit = amountToTake => function*(source) {
    let amountLeftToTake = amountToTake;
    for (const value of source) {
        if (amountLeftToTake > 0) {
            yield value;
        } else {
            break;
        }
        amountLeftToTake--;
    }
}