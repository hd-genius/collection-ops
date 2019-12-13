export function* range(start, end, step) {
    for (let index = start; index < end; index += step) {
        yield index;
    }
}

export function* primes() {
    const previousPrimes = [];
    for (let num = 0; ; num++) {
        if (!previousPrimes.some(prime => isDivisibleBy(num, prime))) {
            previousPrimes.push(num);
            yield num;
        }
    }
}

function isDivisibleBy(value, divisor) {
    return value % divisor === 0;
}