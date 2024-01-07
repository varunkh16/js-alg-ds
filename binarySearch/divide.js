/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend == 1 << 31 && divisor == -1) return Number.MAX_VALUE;

    let sign = (dividend >= 0) == (divisor >= 0) ? true : false;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let result = 0;
    while (dividend - divisor >= 0) {
        let count = 0;
        while (dividend - (divisor << 1 << count) >= 0) {
            count++;
        }

        result += 1 << count;
        dividend -= divisor << count;
    }

    return sign ? result : -result;
}