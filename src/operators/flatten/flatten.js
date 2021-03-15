const reusable = require('../../helpers/reusable/reusable');

exports.flatten = reusable(
        function*(source) {
        for (const value of source) {
            yield value;
        }
    }
);
