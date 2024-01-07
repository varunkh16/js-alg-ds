// Question 1: Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

 

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

var maxDifference = function (nums) {
    let min = nums[0], max = nums[0], n = nums.length;

    if (n < 2) {
        return 0;
    }

    for (let i = 1; i < n; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }

    let no_of_buckets = n - 1;
    let avg = Math.ceil((max - min) / (n - 1));

    let bucket_max = new Array(no_of_buckets), bucket_min = new Array(no_of_buckets);

    bucket_min[0] = min
    bucket_max[0] = min

    bucket_min[n - 1] = max
    bucket_max[n - 1] = max

    for (let i = 0; i < n; i++) {
        if (min === nums[i] || nums[i] === max) {
            continue;
        }

        let bucket_no = Math.floor((nums[i] - min) / avg);
        bucket_max[bucket_no] = bucket_max[bucket_no] ? Math.max(nums[i], bucket_max[bucket_no]) : nums[i];
        bucket_min[bucket_no] = bucket_min[bucket_no] ? Math.min(nums[i], bucket_min[bucket_no]) : nums[i];
    }

    let maxDiff = 0;
    let prev = 0;
    for (let i = 1; i < no_of_buckets; i++) {
        if (bucket_min[i]) {
            maxDiff = Math.max(bucket_min[i] - bucket_max[prev], maxDiff);
        }
        if (bucket_max[i]) {
            prev = i;
        }
    }
    return maxDiff;
};

console.log(maxDifference([3,6,9,1]));