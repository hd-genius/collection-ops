module.exports = function*(start, end, step) {
    for (let index = start; index < end; index += step) {
        yield index;
    }
};
