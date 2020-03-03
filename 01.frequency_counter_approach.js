function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    var frequencyCounter1 = {};
    var frequencyCounter2 = {};

    for(let i=0;i<arr1.length;i++) {
        frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
    }

    for(let j=0;j<arr2.length;j++) {
        frequencyCounter2[arr2[j]] = (frequencyCounter2[arr2[j]] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key**2 in frequencyCounter2)) {
            return false;
        }

        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,1], [1,4,1]));
console.log(same([1,2,1], [1,4]));