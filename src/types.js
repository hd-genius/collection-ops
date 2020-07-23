/**
 * A function that takes a value and determines a true of false status for the value
 * @callback Predicate
 * @template T
 * @param {T} value to be evaluated
 * @returns {boolean} whether or not the provided value satisfies the criteria
 */

/**
 * @callback Mapper
 * @template T, U
 * @param {T} value - the input value to be mapped
 * @returns {U} the result of the mapping
 */

/**
 * A function that takes an iterable and produces a Generator that that returns values after an operation has been applied the values in the source iterable
 * @callback Operator
 * @template T, U
 * @param {Iterable<T>} source - the source iterable to be operated on
 * @return {Generator<U>} the values from the source after the operation has been applied
 */
