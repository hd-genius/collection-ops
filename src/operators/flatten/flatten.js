const reusable = require('../../helpers/reusable/reusable');

function isIterable(value) {
    return value[Symbol.iterator];
}

module.exports = reusable(function* (source) {
    for (const value of source) {
        if (isIterable(value)) {
            yield* value;
        } else {
            yield value;
        }
    }
});
