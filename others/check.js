/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let lastElement = nums[0];
    let rotatedElement = -1;
    for(let i=1;i<nums.length;i++) {
        if(nums[i]<lastElement) {
            if(rotatedElement == -1) {
                lastElement = nums[i];
                rotatedElement = nums[i-1];    
            } else {
                return false;
            }
        } else {
            if(rotatedElement == -1) {
                lastElement = nums[i];
            } else {
                if(nums[i] < rotatedElement) {
                    lastElement = nums[i];
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};

console.log(check([2,4,1,3]));