module.exports = function(source) {
    let count = 0;
    for (const value of source) {
        count++;
    }
    return count;
}