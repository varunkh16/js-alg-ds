/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let preFixMap = {},count=0,sum=0;
    preFixMap[0] = 1;

    for(let i=0;i<nums.length;i++) {
        sum+=nums[i];
        let diff = sum-k;
        if(preFixMap[diff]) {
            count+=preFixMap[diff];
        }
        preFixMap[sum] = (preFixMap[sum] || 0) + 1;
    }

    return count;
};

console.log(subarraySum([1,2,3,-3,1,1,1,4,2,-3],3));