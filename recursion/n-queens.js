/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let ans = [], board = [], leftrow = [], upperDiagonal = [], lowerDiagonal = [];
    for (let i = 0; i < n; i++) {
        board[i] = ".".repeat(n);
        leftrow.push(0);
    }

    for(let i=0;i<(2*n-1);i++) {
        upperDiagonal.push(0);
        lowerDiagonal.push(0);
    }

    let fillCells = (col, board, ans, leftrow, upperDiagonal, lowerDiagonal) => {
        if(col == n) {
            ans.push([...board]);
            return;
        }

        for (let row = 0; row < n; row++) {
            if(leftrow[row] == 0 && lowerDiagonal[row+col] == 0 && upperDiagonal[n-1+col-row] == 0) {
                board[row] = board[row].slice(0, col) + 'Q' + board[row].slice(col+1);
                leftrow[row] = 1;
                lowerDiagonal[row+col] = 1;
                upperDiagonal[n-1+col-row] = 1;
                fillCells(col+1, board, ans, leftrow, upperDiagonal, lowerDiagonal);
                board[row] = board[row].slice(0, col) + '.' + board[row].slice(col+1);
                leftrow[row] = 0;
                lowerDiagonal[row+col] = 0;
                upperDiagonal[n-1+col-row] = 0;
            }
        }
    };

    fillCells(0, board, ans, leftrow, upperDiagonal, lowerDiagonal);
    return ans;
};

console.log(solveNQueens(4));