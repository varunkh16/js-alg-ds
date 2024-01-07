/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    function isValid(board, row, col, c) {
        for (let i = 0; i < 9; i++) {
            if (board[i][col] == c.toString()) {
                return false;
            }
            if (board[row][i] == c.toString()) {
                return false;
            }
            const blockRow = Math.floor(row / 3) * 3;
            const blockCol = Math.floor(col / 3) * 3;
            const curRow = blockRow + Math.floor(i / 3);
            const curCol = blockCol + Math.floor(i % 3);
            if (board[curRow][curCol] == c.toString()) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == ".") {
                for (let c = 1; c <= 9; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c.toString();
                        if (solveSudoku(board)) {
                            return board;
                        } else {
                            board[i][j] = ".";
                        }
                    }
                }
                return false;
            }
        }
    }
    return board;
};


console.log(solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));