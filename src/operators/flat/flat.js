module.exports = function*(source) {
    for (const value of source) {
        yield value;
    }
};
