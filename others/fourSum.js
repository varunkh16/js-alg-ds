/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let n = nums.length, list = [];

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }

            let k = j + 1, l = n - 1;

            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum < target) {
                    k++;
                } else if (sum > target) {
                    l--;
                } else {
                    list.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;
                    while (nums[k] == nums[k - 1]) k++;
                    while (nums[l] == nums[l + 1]) l++;
                }
            }
        }
    }

    return list;
};

console.log(fourSum([1,0,-1,0,-2,2], 0));