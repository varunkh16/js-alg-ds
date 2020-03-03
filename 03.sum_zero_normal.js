function sumZero(arr) {
    var obj = {};
    for(let key of arr) {
        obj[key] = (obj[key] || 0) + 1;
    }
    for(let i=0;i<arr.length;i++) {
        let num;
        if(arr[i]<0) {
            num = arr[i] * -1;
        } else if(arr[i]>0) {
            num = -Math.abs(arr[i]);
        }
        if(obj[num]) {
            return [arr[i], num];
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3,3] 
console.log(sumZero([-2,0,1,3])); // undefined
console.log(sumZero([1,2,3]));