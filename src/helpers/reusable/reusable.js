class ReusableIterable {
    constructor(iteratorFactory) {
        this.iteratorFactory = iteratorFactory;
    }

    [Symbol.iterator]() {
        return this.iteratorFactory();
    }
}

module.exports = function (target) {
    return (...args) => new ReusableIterable(() => target(...args));
};
