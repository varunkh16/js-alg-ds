var subsetsWithDup = function (nums) {
    let ans = [];

    let iterate = (index, ds) => {
        ans.push([...ds]);

        for (let i = index; i < nums.length; i++) {
            if (i != index && nums[i] == nums[i - 1]) continue;
            ds.push(nums[i]);
            iterate(i + 1, ds);
            ds.pop()
        }
    }

    iterate(0, []);
    return ans;
}

console.log(subsetsWithDup([1, 2, 2]));