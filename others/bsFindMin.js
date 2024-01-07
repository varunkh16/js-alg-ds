var findMin = function (nums) {
    let n = nums.length, low = 0, high = n - 1, min = +Infinity;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[low] <= nums[high]) {
            min = Math.min(min, nums[low]);
            break;
        }

        if (nums[low] < nums[mid]) {
            min = Math.min(nums[low], min);
            low = mid + 1;
        } else {
            min = Math.min(nums[mid], min);
            high = mid - 1;
        }
    }

    return min;
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));