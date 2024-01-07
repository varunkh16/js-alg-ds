/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let low = 0, high = mat.length - 1;

    function getMaxElementIndex(row) {
        let maxIndex = 0;
        for (let i = 1; i < row.length; i++) {
            if (row[i] > row[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let maxElementIndex = getMaxElementIndex(mat[mid]);

        let top = (mid - 1) > 0 ? mat[mid - 1][maxElementIndex] : -1;
        let bottom = (mid + 1) < mat.length ? mat[mid + 1][maxElementIndex] : -1;

        if (mat[mid][maxElementIndex] > top && mat[mid][maxElementIndex] > bottom) {
            return [mid, maxElementIndex];
        } else if (mat[mid][maxElementIndex] < top) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return [-1, -1];
};

console.log(findPeakGrid([[1,4],[3,2]]));