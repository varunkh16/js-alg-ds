/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0;
    let j = i + 1;

    while (j <= nums.length - 1) {
        if (nums[i] !== 0) {
            i++;
            j++;
        } else {
            if (nums[j] !== 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
            j++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([1,0,2,3,2,0,0,4,5,1]));