function maxSubarraySum(arr, num) {
    if(num>arr.length) return null;
    var maxSum = 0;
    for(let i=0;i<num;i++) {
        maxSum+=arr[i];
    }

    for(let i=num; i<arr.length; i++){
        let tempSum = maxSum + arr[i] - arr[i-num];
        console.log(maxSum, tempSum);
        maxSum = Math.max(maxSum, tempSum);
    }

    console.log(maxSum);
}

//maxSubarraySum([1,2,5,2,8,1,5],2) // 10
//maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
//maxSubarraySum([4,2,1,6,2],4) // 13
//maxSubarraySum([],4) // null