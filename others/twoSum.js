/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {},len=nums.length;
    for(let i=0;i<len;i++) {
        let diff = target - nums[i];
        if(hashMap[diff]!=undefined) {
            return [hashMap[diff],i];
        } else {
            hashMap[nums[i]] = i;
        }
    }
    return [-1,-1];
};

console.log(twoSum([2,7,11,15],9));