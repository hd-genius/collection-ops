const max = require('./max');

module.exports = (comparator) => {
    const inverseComparator = (x) => 0 - comparator(x);
    return max(inverseComparator);
};
