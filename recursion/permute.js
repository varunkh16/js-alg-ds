/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];

    let generatePermutations = (arr, combination) => {
        if(arr.length === 0) {
            ans.push(combination);
            return;
        }

        for(let ni=0;ni<arr.length;ni++) {
            generatePermutations([...arr.slice(0,ni),...arr.slice(ni+1)], [...combination, arr[ni]]);
        }
    }

    generatePermutations(nums, []);

    return ans;
};

console.log(permute([1,2,3]));