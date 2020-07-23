module.exports = predicate => function*(source) {
    for (const value of source) {
        if (predicate(value)) {
            yield value;
        } else {
            break;
        }
    }
};
