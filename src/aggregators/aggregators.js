exports.max = require('./max/max');

exports.min = require('./min/min');

exports.count = require('./count/count');

exports.find = require('./find/find');

exports.reduce = require('./reduce/reduce');

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