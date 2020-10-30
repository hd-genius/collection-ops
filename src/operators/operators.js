module.exports = {
    filter: require('./filter/filter'),
    ...require('./flatten/flatten'),
    map: require('./map/map'),
    ...require('./limit/limit'),
    sort: require('./sort/sort'),
    ...require('./skip/skip'),
    distinct: require('./distinct/distinct'),
    sideEffect: require('./sideEffect/sideEffect'),
    takeWhile: require('./takeWhile/takeWhile'),
    concat: require('./concat/concat'),
    ...require('./skipWhile/skipWhile')
};
