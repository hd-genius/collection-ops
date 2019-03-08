export function partial(func, ...outerArgs) {
    function wrapper(...innerArgs) {
        return func(...outerArgs, ...innerArgs);
    }

    return wrapper;
}
