/**
 * @function map
 * @template T, U
 * @param {Mapper<T, U>} mapper
 * @return {Operator<T, U>} a new map operation that uses mapper
 */
module.exports = mapper => function*(source) {
    for (const value of source) {
        yield mapper(value);
    }
};
