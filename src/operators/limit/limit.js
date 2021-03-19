const reusable = require('../../helpers/reusable/reusable');

/**
 * A function that produces an Operator that limits the number of values emitted
 * @function limit
 * @template T
 * @param {number} amountToTake the maximum number of values that should be emitted
 * @returns {Operator<T, T>} an Operation that will only yield upto count values
 */
module.exports = amountToTake => reusable(
    function*(source) {
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
);
