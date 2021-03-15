const reusable = require('../../helpers/reusable/reusable');

module.exports = effect => reusable(
    function*(source) {
        for (const value of source) {
            effect(value);
            yield value;
        }
    }
);
