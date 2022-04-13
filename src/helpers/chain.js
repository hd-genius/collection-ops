function chainOperators(first, second) {
    return (source) => second(first(source));
}

/**
 * @function chain
 * @param {...Function} functions the functions to chain together
 * @returns {Function} a function that applies each provided function in order
 */
module.exports = function (...functions) {
    return functions.reduce(chainOperators);
};
