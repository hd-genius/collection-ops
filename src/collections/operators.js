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
