/**
 * @function
 * @template T
 * @param {Comparator<T>} comparator the comparator used to find the largest value
 * @returns {Aggregator<T, T>} an Aggregator that finds the largest value in the source
 */
exports.max = comparator => source => {
    let isFirstValue = true;
    let currentMax;
    for (const value of source) {
        if (isFirstValue) {
            currentMax = value;
            isFirstValue = false;
        } else if (comparator(currentMax, value) < 0) {
            currentMax = value;
        }
    }
    return currentMax;
}

exports.min = comparator => {
    const inverseComparator = x => 0 - comparator(x);
    return exports.max(inverseComparator);
}

exports.count = function(source) {
    let count = 0;
    for (const value of source) {
        count++;
    }
    return count;
}

exports.find = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return value;
        }
    }
    return null;
}

exports.reduce = aggregator => initial => source => {
    let aggregate = initial;
    for (const value of source) {
        aggregate = aggregator(aggregate, value);
    }
    return aggregate;
}

exports.some = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return true;
        }
    }
    return false;
}

exports.none = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return false;
        }
    }
    return true;
}

exports.sum = (values) => reduce((x, y) => x + y)(0)(values);

exports.every = predicate => source => {
    for (const value of source) {
        if (!predicate(value)) {
            return false;
        }
    }
    return true;
}