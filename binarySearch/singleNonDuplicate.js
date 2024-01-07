/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    let n = arr.length;
    if(n==1 || arr[0] != arr[1]) return arr[0];
    if(arr[n-1] != arr[n-2]) return arr[n-1];

    let low = 1, high = n-2;

    while(low<=high) {
        let mid = Math.floor((low+high)/2);

        if(arr[mid] != arr[mid-1] && arr[mid] != arr[mid+1]) return arr[mid];

        if((mid % 2 === 1 && arr[mid] === arr[mid - 1]) || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));