function isDivisibleBy(value, divisor) {
    return value % divisor === 0;
}

module.exports = function*() {
    const previousPrimes = [];
    for (let num = 2; ; num++) {
        if (!previousPrimes.some(prime => isDivisibleBy(num, prime))) {
            previousPrimes.push(num);
            yield num;
        }
    }
};
