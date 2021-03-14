class ReusableIterable {
    iteratorFactory;

    constructor(iteratorFactory) {
        this.iteratorFactory = iteratorFactory;
    }

    [Symbol.iterator]() {
        return this.iteratorFactory();
    }
}

module.exports = iteratorFactory => new ReusableIterable(iteratorFactory);
