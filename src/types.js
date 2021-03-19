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
 * A function that takes an Iterable and produces a Iterable that that returns values after an operation has been applied the values in the source iterable
 * @callback Operator
 * @template T, U
 * @param {Iterable<T>} source - the source iterable to be operated on
 * @return {Iterable<U>} the values from the source after the operation has been applied
 */

/**
 * A function that takes an iterable and aggregates it to create a single result.
 * Cannot be used with infinite collections, it will cause an infinite loop.
 * @callback Aggregator
 * @template T, U
 * @param {Iterable<T>} source an iterable to be aggregated
 * @returns {U} a single value that is the result of aggregating a source iterable
 */

/**
 * A function that compares two arguments
 * @callback Comparator
 * @template T
 * @param {T} first
 * @param {T} second
 * @returns {number} a negative number if the first argument is smaller,
 * zero if both arguments are equal, or a positive number if the
 * first argument is larger than the second
 */
