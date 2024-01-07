/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {
    let n = arr.length;
    if(n == 1 || arr[0]>arr[1]) return arr[0];
    if(arr[n-1]>arr[n-2]) return arr[n - 1];

    let low = 1, high = n-2;

    while(low<=high) {
        let mid = Math.floor((low+high)/2);

        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) return mid;

        if(arr[mid]>arr[mid-1]) low = mid+1;
        else high = mid - 1;
    }

    return -1;
}

console.log(findPeakElement([1,2,1,3,5,6,4]));