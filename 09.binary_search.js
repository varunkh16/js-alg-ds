function binarySearch(arr, num) {
    var low = 0;
    var high = arr.length-1;
    var mid = Math.floor((low+high)/2);
    while(low<high) {
        if(arr[mid]<num)  low=mid+1;
        if(arr[mid]>num)  high=mid-1;
        mid = Math.floor((low+high)/2);
    }
    return arr[mid]===num?mid:-1;
}

console.log(binarySearch([ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ], 15));