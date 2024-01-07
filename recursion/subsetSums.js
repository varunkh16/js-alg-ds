var subsetSums = function(nums) {
    let ans = [];

    var iterate = (index, sum) => {
        if(index==nums.length) {
            ans.push(sum);
            return;
        }
        iterate(index+1, sum + nums[index]);

        iterate(index+1, sum);
    }

    iterate(0, 0);

    return ans.sort((a,b) => a-b);
}

console.log(subsetSums([0,1,2,3,3,4,5,6]));