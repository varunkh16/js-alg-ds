/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    if (exponent < 0) {
        base = 1 / base;
        exponent = -exponent;
    }
    if (exponent == 1) return base;
    let hp = myPow(base, Math.floor(exponent / 2));
    let res = hp * hp
    if (exponent % 2 != 0) {
        res *= base;
    }
    return res;
};

console.log(myPow(2.00000,10));