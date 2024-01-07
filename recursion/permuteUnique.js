/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let ans = [];
    nums = nums.sort((a,b) => a-b);

    let generatePermutations = (arr, combination) => {
        if(arr.length === 0) {
            ans.push(combination);
            return;
        }

        for(let ni=0;ni<arr.length;ni++) {
            if(ni != 0 && arr[ni] == arr[ni-1]) continue;
            generatePermutations([...arr.slice(0,ni),...arr.slice(ni+1)], [...combination, arr[ni]]);
        }
    }

    generatePermutations(nums, []);

    return ans;
};

console.log(permuteUnique([1,2,1]));