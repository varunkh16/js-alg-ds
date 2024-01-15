/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    nums.sort((a, b) => a - b);

    let l = 0, r = 1, count = 0, n = nums.length;

    while (r < n) {
        let diff = nums[r] - nums[l];
        if (l == r) {
            r++;
            continue;
        }
        if (diff == k) {
            count++;
            l++;
            r++;
            while (l < n && nums[l] == nums[l - 1]) l++;
            while (r < n && nums[r] == nums[r - 1]) r++;
        }
        else if (diff < k) r++;
        else l++;
    }

    return count;
};

console.log(findPairs([3,1,4,1,5], 2));