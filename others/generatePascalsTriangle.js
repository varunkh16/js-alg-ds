/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    
    for(let i=1;i<=numRows; i++) {
        let newRow = [1],ans=1;
        for(let j=1;j<i; j++) {
            ans*=(i-j);
            ans/=j;
            newRow.push(ans);
        }
        result.push(newRow);
    }
    return result;
};

console.log(generate(6));