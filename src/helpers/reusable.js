exports.reusable = iteratorFactory => new ReusableIterable(iteratorFactory);

class ReusableIterable {
    iteratorFactory;

    constructor(iteratorFactory) {
        this.iteratorFactory = iteratorFactory;
    }

    [Symbol.iterator]() {
        return this.iteratorFactory();
    }
}