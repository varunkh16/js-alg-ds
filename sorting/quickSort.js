var quickSort = function (nums) {
    let n = nums.length;
    if (n === 1) return nums;

    let l = 0, r = n - 1;

    function partition(low, high) {
        let pivot = nums[low], i = low, j = high;

        while (i < j) {
            while (nums[i] <= pivot) {
                i++;
            }
            while (nums[j] > pivot) {
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

    return quick_sort(l, r);
}

console.log(quickSort([1, 20, 6, 4, 5]));