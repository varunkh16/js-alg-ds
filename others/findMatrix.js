/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let frequecyCounter = {}, maxFrequency = -Infinity, finalArr = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        frequecyCounter[num] = (frequecyCounter[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequecyCounter[num]);
    }

    console.log(frequecyCounter);

    for (const [key, value] of Object.entries(frequecyCounter)) {
        for (let i = 0; i < value; i++) {
            if(!finalArr[i]) finalArr[i] = new Array();
            finalArr[i].push(key);
        }
    }

    return finalArr;
};

console.log(findMatrix([1,3,4,1,2,3,1]));