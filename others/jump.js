/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0;
    let count = nums[0];
    for(let i=1;i<nums.length;i++) {
        if(nums[i] == 0 && count<=0) {
            return -1;
        } else {
            if(count>nums[i]) {
                count--;
            } else {
                count = nums[i];
                steps++;
            }
        }
    }
    if(count==nums[nums.length-1]) {
        steps++;
    }
    return steps;
};

console.log(jump([2,3,1]));