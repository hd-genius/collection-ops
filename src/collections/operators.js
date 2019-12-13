// Predicate<T> => Iterable<T> => Iterable<T>
export const filter = predicate => function* (source) {
    for (const value of source) {
        if (predicate(value)) {
            yield value;
        }
    }
}

// Operation<T> => Iterable<T> => Iterable<T>
export const map = operation => function* (source) {
    for (const value of source) {
        yield operation(value);
    }
}

export const flat = levels => function*(source) {
    if (levels > 0) {
        for (const value of source) {
            yield* flat(levels - 1, value);
        }
    } else {
        for (const value of source) {
            yield value;
        }
    }
}

// Iterable<T> => Iterable<T>
export const take = count => function* (source) {
    for (const value of source) {
        if (count > 0) {
            yield value;
        } else {
            break;
        }
        count--;
    }
}

// Iterable<T> => Iterable<T>
export const drop = count => function* (source) {
    for (const value of source) {
        if (count > 0) {
            continue;
        } else {
            yield value;
        }
    }
}

// Iterable<T> => Iterable<T>
export const takeWhile = predicate => function* (source) {
    for (const value of source) {
        if (predicate(value)) {
            yield value;
        } else {
            break;
        }
    }
}

export function* intersection(...sources) {
    const valuesInOtherSource = new Set();
    const numberOfSources = sources.length;
    const runningSource = sources.pop();
    if (numberOfSources > 1) {
        for (const value of runningSource) {
            for (const otherValue of union(...sources)) {
                valuesInOtherSource.add(otherValue);
                if (valuesInOtherSource.has(value)) {
                    yield value;
                }
            }
        }
    } else {
        for (const value of runningSource) {
            yield value;
        }
    }
}

export function* difference(...sources) {
    // TODO: implement
}

// Iterable<T> => Iterable<T>
export function* distinct(source) {
    let previousValues = new Set();
    for (const value of source) {
        if (!previousValues.has(value)) {
            previousValues.add(value);
            yield value;
        }
    }
}

// Iterable<T>[] => Iterable<T>
export function* concat(...sources) {
    for (const source of sources) {
        yield *source;
    }
}

// Comparator<T> => Iterable<T> => Iterable<T>
export const sort = comparator => function* (source) {
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

// comparator = (x, y) => x - y
// negative = x < y
// zero = x == y
// positive x > y

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

// Predicate<T> => Iterable<T> => boolean
export const every = predicate => source => {
    for (const value of source) {
        if (!predicate(value)) {
            return false;
        }
    }
    return true;
}
