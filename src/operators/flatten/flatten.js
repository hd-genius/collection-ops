const reusable = require('../../helpers/reusable/reusable');

module.exports = reusable(
        function*(source) {
        for (const value of source) {
            yield value;
        }
    }
);
