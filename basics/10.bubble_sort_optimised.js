// here we check if the previous iteration had any swaps, if there was none we break away from the loop
function sort(arr) {
    var left=arr.length;
    var swaps = false;
    while(left>0) {
        for(let i=0;i<left-1;i++){
            if(arr[i]>arr[i+1]){
                swaps=true;
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            }
        }
        if(!swaps) break;
        left--;
    }
    return arr;
}

console.log(sort([12,4,78,3,25,9,29]));