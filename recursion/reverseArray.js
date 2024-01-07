function reverseArray(i,j,array) {
    if(i>=j) return array;
    else {
        [array[i],array[j]] = [array[j],array[i]];
        return reverseArray(i+1,j-1,array);
    }
}

let array = [2,5,1,8,4,9];
console.log(reverseArray(0,array.length-1,array));