/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let minAbsDiff = +Infinity, diffMap = {};

    arr = arr.sort((a,b) => a-b);

    for(let i=1;i<arr.length;i++) {
        let diff = arr[i]-arr[i-1];
        minAbsDiff = Math.min(minAbsDiff, diff);
        if(!diffMap[diff]) {
            diffMap[diff] = [];
        }
        diffMap[diff].push([arr[i-1],arr[i]]);
    }

    return diffMap[minAbsDiff];
};


console.log(minimumAbsDifference([4,2,1,3]));