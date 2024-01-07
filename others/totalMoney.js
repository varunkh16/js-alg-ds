/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let sum=0, iterCost = 0;
    for(let i=0;i<n;i++) {
        if(i%7 == 0) {
            iterCost = i/7 + 1;
        } else {
            iterCost++;
        }
        sum+=iterCost;
    }
    return sum;
};


console.log(totalMoney(4));