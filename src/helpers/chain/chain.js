function chainOperators(first, second) {
    return source => second(first(source));
}

/**
 * @function chain
 * @param functions
 * @returns  an function that applies each provided function in order
 */
// TODO: rename this function to something generic since it applies to more than just operators
 module.exports = function(...functions) {
    return functions.reduce(chainOperators);
};
