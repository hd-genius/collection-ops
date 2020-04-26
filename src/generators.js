exports.range = function*(start, end, step) {
    for (let index = start; index < end; index += step) {
        yield index;
    }
};

function isDivisibleBy(value, divisor) {
    return value % divisor === 0;
}

exports.primes = function*() {
    const previousPrimes = [];
    for (let num = 2; ; num++) {
        if (!previousPrimes.some(prime => isDivisibleBy(num, prime))) {
            previousPrimes.push(num);
            yield num;
        }
    }
};