exports.skipWhile = predicate => function*(source) {
    let hasFailed = false;
    for (const value of source) {
        hasFailed = hasFailed || !predicate(value);
        if (hasFailed) {
            yield value;
        } else {
            continue;
        }
    }
}