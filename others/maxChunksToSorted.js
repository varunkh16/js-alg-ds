/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let finalArray = [];
    let tempArray = [];
    for(let i=0;i<arr.length; i++) {
        if(tempArray.length == 0) {
            tempArray.push(arr[i]);
        } else {
            if(arr[i]<tempArray[tempArray.length-1]) {
                tempArray.push(arr[i]);
            } else {
                finalArray.push(tempArray);
                tempArray = [];

                tempArray.push(arr[i]);
            }
        }
    }
    if(tempArray.length>0) {
        finalArray.push(tempArray);
    }
    return finalArray;
};

console.log(maxChunksToSorted([2,0,1]));