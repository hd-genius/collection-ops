function chainOperators(first, second) {
    return source => second(first(source));
}

/**
 * @function combineOperators
 * @param {...Operator} operators an operator to combine
 * @returns {Operator} an Operator that applies each provided operator in order
 */
module.exports = function(...operators) {
    return operators.reduce(chainOperators);
};
