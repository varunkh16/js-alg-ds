/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. */

function same(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    }
    for(let i=0;i<arr1.length;i++) {
        const idx = arr2.indexOf(arr1[i] ** 2);
        if(idx === -1) {
            return false;
        }
        arr2.splice(idx,1);
    }
    return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,1], [1,4,1]));
console.log(same([1,2,1], [1,4]));