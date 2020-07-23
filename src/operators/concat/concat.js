module.exports = function*(...sources) {
    for (const source of sources) {
        yield *source;
    }
};
