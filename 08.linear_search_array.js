var left=0;
function linearSearch(arr, num) {
    if(arr.length===0) return -1;

    if(left===arr.length-1 && arr[left]!==num) return -1;

    if(arr[left]===num) {
        return left;
    }

    left++;

    return linearSearch(arr, num);
}

console.log(linearSearch([ 5, 8, 1, 100, 12, 3, 12 ],12));