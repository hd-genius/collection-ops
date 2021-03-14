const { reusable } = require("collection-ops");

describe('reusable', () => {

    function* testGenerator() {
        yield 1;
        yield 2;
        yield 3
    }

    it('should fetch the iterator from the factory each time an iterator is requested', () => {
        const reusableIterable = reusable(testGenerator);

        const firstIterator = reusableIterable[Symbol.iterator]();
        expect(firstIterator.next().value).toBe(1);
        expect(firstIterator.next().value).toBe(2);
        expect(firstIterator.next().value).toBe(3);

        const secondIterator = reusableIterable[Symbol.iterator]();
        expect(secondIterator.next().value).toBe(1);
        expect(secondIterator.next().value).toBe(2);
        expect(secondIterator.next().value).toBe(3);
    })
})