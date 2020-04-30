/**
 * A function that takes a value and determines a true of false status for the value
 * @callback Predicate
 * @template T the type of value
 * @param {T} value the value to be evaluated
 * @returns {boolean} whether or not the provided value satisfies the predicate function
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

/**
 * @function
 * @template T
 * @param {Predicate<T>} predicate determines if a value from the source iterable will be in the output Generator
 * @return {Operator<T, T>} a new filter operation that uses predicate
 */
exports.filter = predicate => function*(source) {
    for (const value of source) {
        if (predicate(value)) {
            yield value;
        }
    }
}

/**
 * @function
 * @template T, U
 * @param {Mapper<T, U>} mapper
 * @return {Operator<T, U>} a new map operation that uses mapper
 */
exports.map = operation => function*(source) {
    for (const value of source) {
        yield operation(value);
    }
}

exports.flat = function*(source) {
    for (const value of source) {
        yield value;
    }
}

exports.take = count => function*(source) {
    let amountToTake = count;
    for (const value of source) {
        if (amountToTake > 0) {
            yield value;
        } else {
            break;
        }
        amountToTake--;
    }
}

exports.drop = count => function*(source) {
    let amountToDrop = count;
    for (const value of source) {
        if (amountToDrop > 0) {
            amountToDrop--;
            continue;
        } else {
            yield value;
        }
    }
}

exports.takeWhile = predicate => function*(source) {
    for (const value of source) {
        if (predicate(value)) {
            yield value;
        } else {
            break;
        }
    }
}

exports.distinct = function*(source) {
    let previousValues = new Set();
    for (const value of source) {
        if (!previousValues.has(value)) {
            previousValues.add(value);
            yield value;
        }
    }
}

exports.concat = function*(...sources) {
    for (const source of sources) {
        yield *source;
    }
}

exports.sort = comparator => function*(source) {
    let remainingValues = Array.from(source);
    while (remainingValues.length > 0) {
        for (let index = remainingValues.length; index > 0; index--) {
            let currentValue = remainingValues[index];
            let nextIndex = index - 1;
            let nextValue = remainingValues[nextIndex];
            if (comparator(currentValue, nextValue) < 0) {
                remainingValues[index] = nextValue;
                remainingValues[nextIndex] = currentValue;
            }
        }
        yield remainingValues.shift();
    }
}

function chainOperators(first, second) {
    return source => second(first(source));
}

exports.combineOperators = function(...operators) {
    return operators.reduce(chainOperators);
}