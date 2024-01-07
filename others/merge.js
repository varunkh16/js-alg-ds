/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let ans = [], n = intervals.length;

    intervals = intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
        if (ans.length == 0 || intervals[i][0] > ans[ans.length - 1][1]) {
            ans.push(intervals[i]);
        } else {
            ans[ans.length - 1][1] = Math.max(intervals[i][1], ans[ans.length - 1][1]);
        }
    }

    return ans;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));