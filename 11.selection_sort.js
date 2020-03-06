function sort(arr) {
    var left = 0;
    var swaps = false;
    while(left<arr.length) {
        let minIndex = left;
        for(let i=left+1;i<arr.length;i++){
            if(arr[minIndex]>arr[i]) {
                minIndex = i;
                swaps=true;
            }
        }
        if(left!=minIndex) {
            [arr[left], arr[minIndex]]=[arr[minIndex], arr[left]];
        }
        if(!swaps) break;
        left++;
    }
    return arr;
}

//console.log(sort([12,4,78,3,25,9,29]));
console.log(sort([8,9,1,2,3,4,5,6,7]));