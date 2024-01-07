function sumZero(arr) {
    var left = 0;
    var right = arr.length-1;
    while(left<right) {
        let sum = arr[left] + arr [right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum>0) {
            right--;
        } else if(sum<0) {
            left++;
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3,3] 
console.log(sumZero([-2,0,1,3])); // undefined
console.log(sumZero([1,2,3]));