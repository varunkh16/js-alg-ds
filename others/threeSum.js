/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let n = nums.length, list = [];

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let j = i + 1, k = n - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum == 0) {
                list.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] == nums[j - 1]) j++;
                while (nums[k] == nums[k + 1]) k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return list;
};

console.log(threeSum([-1,0,1,2,-1,-4]));