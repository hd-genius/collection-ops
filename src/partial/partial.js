"use strict";

export function partial(func, outerArgs) {
    function wrapper(innerArgs) {
        func(...outerArgs, ...innerArgs);
    }

    return wrapper;
}
