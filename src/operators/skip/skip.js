const reusable = require('../../helpers/reusable/reusable');

module.exports = (count) =>
    reusable(function* (source) {
        let amountToDrop = count;
        for (const value of source) {
            if (amountToDrop > 0) {
                amountToDrop--;
            } else {
                yield value;
            }
        }
    });
