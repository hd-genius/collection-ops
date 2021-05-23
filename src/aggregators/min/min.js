const max = require('../max/max');


module.exports = comparator => {
    const inverseComparator = x => 0 - comparator(x);
    return max(inverseComparator);
};
