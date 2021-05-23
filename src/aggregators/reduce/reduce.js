module.exports = aggregator => initial => source => {
    let aggregate = initial;
    for (const value of source) {
        aggregate = aggregator(aggregate, value);
    }
    return aggregate;
};
