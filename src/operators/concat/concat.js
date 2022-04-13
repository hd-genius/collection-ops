const { reusable } = require('../../helpers');

module.exports = reusable(function* concat(...sources) {
    for (const source of sources) {
        yield* source;
    }
});
