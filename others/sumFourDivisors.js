/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let factors = [];
        let n = nums[i];
        for (let j = 1; j <= Math.sqrt(n); j++) {
            if(n%j == 0){
                let quotient = n/j;
                if(quotient!=j) {
                    factors.push(n/j);
                }
                factors.push(j);
            }
        }
        if(factors.length==4) {
            sum+=factors.reduce((partialSum, a) => partialSum + a, 0);
        }
    }
    return sum;
};

console.log(sumFourDivisors([21,4,7]));