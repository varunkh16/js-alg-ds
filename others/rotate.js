/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;

    for(let i=0;i<n;i++) {
        for(let j=i;j<n;j++) {
            if(i!=j) {
                [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]] 
            }
        }   
    }

    for(let i=0;i<n;i++) {
        let left = 0, right = n-1;

        while(left<right) {
            [matrix[i][left],matrix[i][right]] = [matrix[i][right],matrix[i][left]];
            left++;
            right--;
        }
    }

    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));