/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    for(let i=0;i<matrix.length;i++) {
        for(let j=1;j<matrix[i].length;j++) {
            matrix[i][j]+=matrix[i][j-1];
        }
    }

    for(let i=1;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++) {
            matrix[i][j]+=matrix[i-1][j];
        }
    }
    this.matrix = matrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = this.matrix[row2][col2];
    if(this.matrix[row1-1][col1-1]) sum+=this.matrix[row1-1][col1-1];
    if(this.matrix[row2][col1-1]) sum-=this.matrix[row2][col1-1];
    if(this.matrix[row1-1][col2]) sum-=this.matrix[row1-1][col2];
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

var obj = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
console.log(obj.sumRegion(2,1,4,3))