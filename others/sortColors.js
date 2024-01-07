/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let hashMap = {};
    let count0 = 0,count1 = 0,count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1;
    }

    console.log(hashMap);

    if (hashMap['0']) {
        count0 = hashMap['0'];
        for (let i = 0; i < count0; i++) {
            nums[i] = 0;
        }
    }

    if (hashMap['1']) {
        count1 = hashMap['1'];
        for (let i = count0; i < (count0+count1); i++) {
            nums[i] = 1;
        }
    }

    if (hashMap['2']) {
        count2 = hashMap['2'];
        for (let i = (count0+count1); i < (count0+count1+count2); i++) {
            nums[i] = 2;
        }
    }

    console.log(nums);
};

console.log(sortColors([2,0,2,1,1,0]));