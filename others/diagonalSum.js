/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n = mat.length;
    let rows = 0;
    let sum = 0;
    let i = 0;
    let j = n - 1;

    while(i<j) {
        if(i == j) {
            sum+=mat[rows][i];
        } else {
            sum+=mat[rows][i]+mat[rows][j];
        }
        i++;
        j--;
        rows++;
    }

    while(i>=0 && j<mat.length && rows < n) {
        if(i == j) {
            sum+=mat[rows][i];
        } else {
            sum+=mat[rows][i]+mat[rows][j];
        }
        i--;
        j++;
        rows++;
    }

    return sum;
};

console.log(diagonalSum([[7,3,1,9],[3,4,6,9],[6,9,6,6],[9,5,8,5]]));