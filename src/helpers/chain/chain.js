function chainOperators(first, second) {
    return source => second(first(source));
}

/**
 * @function chain
 * @param functions
 * @returns  an function that applies each provided function in order
 */
module.exports = function(...functions) {
    return functions.reduce(chainOperators);
};
