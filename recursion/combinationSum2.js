/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ds = [], ans = [];

    candidates.sort((a,b) => a-b);
    let iterate = (index, target) => {
        if(target == 0) {
            ans.push([...ds]);
            return;
        }
        for(let i=index;i<candidates.length;i++) {
            if(i > index && candidates[i] == candidates[i-1]) continue;
            if(candidates[i] > target) continue;
            ds.push(candidates[i]);
            iterate(i+1, target - candidates[i]);
            ds.pop();
        }
    }

    iterate(0, target);
    return ans;
};

console.log(combinationSum2([10,1,2,7,6,1,5],8));