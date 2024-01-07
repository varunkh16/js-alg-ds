/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let max = 0;
    for(let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length && i!=j;j++) {
            let currentMax = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j);
            max = Math.max(max, currentMax);
        }    
    }
    return max;
};

//console.log(maxAbsValExpr([1,-2,-5,0,10],[0,-2,-1,-7,-4]));


var maxAbsValExprOptimized = function(arr1, arr2) {
    let l1 = [], l2 = [], l3 = [], l4 = [], res = [];

    for(let i=0;i<arr1.length;i++) {
        l1.push(arr1[i] + arr2[i] + i);
        l2.push(arr1[i] - arr2[i] + i);
        l3.push(-arr1[i] + arr2[i] + i);
        l4.push(-arr1[i] - arr2[i] + i);
    }

    res.push(Math.max(...l1) - Math.min(...l1));
    res.push(Math.max(...l2) - Math.min(...l2));
    res.push(Math.max(...l3) - Math.min(...l3));
    res.push(Math.max(...l4) - Math.min(...l4));

    return Math.max(...res);
};

console.log(maxAbsValExprOptimized([1,-2,-5,0,10],[0,-2,-1,-7,-4]));