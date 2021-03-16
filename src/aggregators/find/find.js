module.exports = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return value;
        }
    }
    return null;
}
