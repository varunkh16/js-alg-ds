var setZeroes = function(matrix) {
    let rows = {};
    let cols = {};
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++) {
            if(matrix[i][j] == 0) {
                rows[i] = (rows[i] || 0 ) + 1;
                cols[j] = (cols[j] || 0 ) + 1;
            }
        }
    }

    let rowInfo = Object.keys(rows);
    for(let i=0;i<rowInfo.length;i++) {
        let rownum = +rowInfo[i];
        for(let j=0;j<matrix[rownum].length;j++) {
            matrix[rownum][j] = 0;
        }
    }

    let colInfo = Object.keys(cols);
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<colInfo.length;j++) {
            let colnum = +colInfo[j];
            matrix[i][colnum] = 0;
        }
    }

    console.log(matrix);
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));