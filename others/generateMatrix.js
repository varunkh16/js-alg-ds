/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix=[],count=0,col=0,row=0;
    const maxElements=n*n;

    for(let i=0; i<n;i++)
    {
        matrix[i]= new Array()
    }

    while(maxElements>count)
    {
        for(let i=col; maxElements>count && i<n-col;i++)
        {
            count++;
            matrix[row][i]=count
            // console.log(1, matrix[y][i])
        }
        row++;

        for(let i=row; maxElements>count && i<n-(row-1);i++)
        {
            count++;
            matrix[i][(n-1) - col]=count;
            // console.log(2, matrix[i][(n-1) - x])
        }
        col++;

        for(let i=(n-1)-col; maxElements>count && i>=col-1; i--)
        {
            count++;
            matrix[(n-1)-(row-1)][i]=count;
            // console.log(3, matrix[(n-1)-(y-1)][i])
        }

        for(let i=(n-1)-row; maxElements>count && i>=row; i--)
        {
            count++;
            matrix[i][col-1]=count
            // console.log(4, matrix[i][x-1])
        }
    }
    return matrix;
};