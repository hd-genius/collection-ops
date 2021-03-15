const reusable = require('../../helpers/reusable/reusable');

function* concat(...sources) {
    for (const source of sources) {
        yield *source;
    }
};

module.exports = function(...sources) {
    return reusable(() => concat(...sources));
}