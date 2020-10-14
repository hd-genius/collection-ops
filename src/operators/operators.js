module.exports = {
    filter: require('./filter/filter'),
    flat: require('./flat/flat'),
    map: require('./map/map'),
    take: require('./take/take'),
    sort: require('./sort/sort'),
    ...require('./skip/skip'),
    distinct: require('./distinct/distinct'),
    sideEffect: require('./sideEffect/sideEffect'),
    takeWhile: require('./takeWhile/takeWhile'),
    combineOperators: require('./combineOperators/combineOperators'),
    concat: require('./concat/concat'),
};
