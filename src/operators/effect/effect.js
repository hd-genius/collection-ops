module.exports = effect => function*(source) {
    for (const value of source) {
        effect(value);
        yield value;
    }
};
