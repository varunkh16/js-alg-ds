/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    nums = nums.filter(item => item!=0);
    let set = new Set(nums);
    return set.size;
};

console.log(minimumOperations([1,5,0,3,5]));