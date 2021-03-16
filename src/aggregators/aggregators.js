exports.max = require('./max/max');

exports.min = require('./min/min');

exports.count = require('./count/count');

exports.find = require('./find/find');

exports.reduce = require('./reduce/reduce');

exports.some = require('./some/some');

exports.none = predicate => source => {
    for (const value of source) {
        if (predicate(value)) {
            return false;
        }
    }
    return true;
}

exports.every = predicate => source => {
    for (const value of source) {
        if (!predicate(value)) {
            return false;
        }
    }
    return true;
}