/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prefix = 1, suffix = 1, n = nums.length, ans = -Infinity;

    for(let i=0;i<n;i++) {
        if(prefix == 0) prefix = 1;
        if(suffix == 0) suffix = 1;

        prefix *= nums[i];
        suffix *= nums[n-i-1];

        ans = Math.max(ans, Math.max(prefix,suffix));
    }

    return ans;
};

console.log(maxProduct([2,3,-2,4]));