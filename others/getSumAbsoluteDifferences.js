/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let totalSum = nums.reduce((a,b) => a+b,0);
    let right = totalSum, left = 0, n=nums.length;
    let result = [];
    
    for(let i=0; i< n; i++) {
        let diff = ((i*nums[i]) - left) + (right - (nums[i]*(n-i)));
        result.push(diff);
        left+=nums[i];
        right-=nums[i];
    }
    return result;
};

console.log(getSumAbsoluteDifferences([2,3,5]));