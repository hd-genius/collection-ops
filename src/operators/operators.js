module.exports = {
    filter: require('./filter/filter'),
    ...require('./flatten/flatten'),
    map: require('./map/map'),
    ...require('./limit/limit'),
    sort: require('./sort/sort'),
    ...require('./skip/skip'),
    distinct: require('./distinct/distinct'),
    effect: require('./effect/effect'),
    takeWhile: require('./takeWhile/takeWhile'),
    concat: require('./concat/concat'),
    ...require('./skipWhile/skipWhile')
};
