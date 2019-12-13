// Comparator<T> => Iterable<T> => Iterable<T>
export const min = comparator => {
    const inverseComparator = x => 0 - comparator(x);
    return max(inverseComparator);
}

// Comparator<T> => Iterable<T> => Iterable<T>
export const max = comparator => source => {
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

// Iterable<T> => number
export function count(source) {
    let count = 0;
    for (const value of source) {
        count++;
    }
    return count;
}

// Predicate<T> => Iterable<T> => T
export const find = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return value;
        }
    }
    return null;
}

export const reduce = aggregator => initial => source => {
    let aggregate = initial;
    for (const value of source) {
        aggregate = aggregator(aggregate, value);
    }
    return aggregate;
}

// Predicate<T> => Iterable<T> => boolean
export const some = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return true;
        }
    }
    return false;
}

// Predicate<T> => Iterable<T> => boolean
export const none = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return false;
        }
    }
    return true;
}

// Iterable<number> => number
export function sum(values) {
    reduce((x, y) => x + y)(0)(values)
}

// Predicate<T> => Iterable<T> => boolean
export const every = predicate => source => {
    for (const value of source) {
        if (!predicate(value)) {
            return false;
        }
    }
    return true;
}
