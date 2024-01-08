/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (nums, k) {
    let n = nums.length, l = 0, r = n - 1;

    function calculateDistance(point) {
        if (point != undefined) {
            return Math.sqrt((point[0] * point[0]) + (point[1] * point[1]));
        }
    }

    function partition(low, high) {
        let pivot = calculateDistance(nums[low]), i = low, j = high;

        while (i < j) {
            while (calculateDistance(nums[i]) <= pivot) {
                i++;
            }
            while (calculateDistance(nums[j]) > pivot) {
                j--;
            }

            if (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        [nums[low], nums[j]] = [nums[j], nums[low]];
        return j;
    }

    function quick_sort(low, high) {
        if (low < high) {
            p = partition(low, high);
            quick_sort(low, p - 1);
            quick_sort(p + 1, high);
        }
        return nums;
    }

    quick_sort(l, r);

    let ans = [];

    for (let x = 0; x < k; x++) {
        ans.push(nums[x]);
    }

    return ans;
};

console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));