const reusable = require("../../helpers/reusable/reusable");

exports.skip = count => reusable(
        function*(source) {
        let amountToDrop = count;
        for (const value of source) {
            if (amountToDrop > 0) {
                amountToDrop--;
            } else {
                yield value;
            }
        }
    }
);
