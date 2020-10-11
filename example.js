var {filter, map, combineOperators} = require("collection-ops")

const values = [1, 2, 4, 5];

const onlyOdds = filter(x => x % 2);
const doubleAll = map(x => x * 2);

const findAllOddsAndDouble = combineOperators(
    onlyOdds,
    doubleAll
);

for (const value of findAllOddsAndDouble(values))
    console.log(value);