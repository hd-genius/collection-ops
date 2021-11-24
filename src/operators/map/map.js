const reusable = require('../../helpers/reusable/reusable');

/**
 * @function map
 * @template T, U
 * @param {Mapper<T, U>} mapper a Mapper used to determine the values in the new collection
 * @return {Operator<T, U>} a new map operation that uses mapper
 */
module.exports = (mapper) =>
    reusable(function* (source) {
        for (const value of source) {
            yield mapper(value);
        }
    });
