exports.max = require('./max/max');

exports.min = require('./min/min');

exports.count = require('./count/count');

exports.find = require('./find/find');

exports.reduce = aggregator => initial => source => {
    let aggregate = initial;
    for (const value of source) {
        aggregate = aggregator(aggregate, value);
    }
    return aggregate;
}

exports.some = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return true;
        }
    }
    return false;
}

exports.none = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return false;
        }
    }
    return true;
}

exports.sum = (values) => reduce((x, y) => x + y)(0)(values);

exports.every = predicate => source => {
    for (const value of source) {
        if (!predicate(value)) {
            return false;
        }
    }
    return true;
}