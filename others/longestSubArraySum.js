//This is a Better approach and can be optimized further using sliding window concept
/*var longestSubArraySum = function(arr, k) {
    let hashMap = {};
    let preSum = 0;
    let maxLength = 0;
    for(let i=0;i<arr.length;i++) {
        let num = arr[i];
        if(num != 0) {
            preSum+=num;
            hashMap[preSum] = i;
        }
        let diff = preSum - k;
        if(hashMap[diff]) {
            let index = hashMap[diff];
            maxLength = Math.max(maxLength, i-index);
        }
    }

    return maxLength;
};

console.log(longestSubArraySum([1,2,3,1,1,1,1,4,2,3,5],6));
*/

//Sliding Window Approach
var longestSubArraySum = function(arr, k) {
  let i = 0,
    j = 0,
    maxLength = 0,
    sum = arr[0],
    n = arr.length;

  while (j < n) {
    while(i<=j && sum>k) {
        sum-=arr[i];
        i++;
    }
    if(sum == k) {
        maxLength = Math.max(maxLength, j-i+1);
    }
    if(j<n) {
        j++;
        sum+=arr[j];
    }
  }
  return maxLength;
};

console.log(longestSubArraySum([1, 2, 3, 1, 1, 1, 1, 4, 2, 3, 5], 6));