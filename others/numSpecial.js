/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {

    function isValidRow(index) {
        let count = 0;

        for(let j=0;j<mat[index].length;j++) {
            if(mat[index][j] == 1) {
                count++;
            }
        }

        return count==1;
    }

    function isValidCol(index) {
        let count = 0;

        for(let j=0;j<mat.length;j++) {
            if(mat[j][index] == 1) {
                count++;
            }
        }

        return count==1;
    }

    let count = 0;

    for(let i=0;i<mat.length;i++) {
        for(let j=0;j<mat[i].length;j++) {
            if(isValidRow(i) && isValidCol(j)) {
                count++;
            }
        }   
    }

    return count;
};

console.log(numSpecial([[0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0]]));

console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]]));
