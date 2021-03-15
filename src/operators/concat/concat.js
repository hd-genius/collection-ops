const reusable = require('../../helpers/reusable/reusable');

module.exports = reusable(
    function* concat(...sources) {
        for (const source of sources) {
            yield *source;
        }
    }
);
