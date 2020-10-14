exports.skip = count => function*(source) {
    let amountToDrop = count;
    for (const value of source) {
        if (amountToDrop > 0) {
            amountToDrop--;
        } else {
            yield value;
        }
    }
};
