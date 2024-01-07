function sort(arr) {
    var left=arr.length;
    while(left>0) {
        for(let i=0;i<left-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            }
        }
        left--;
    }
    return arr;
}

console.log(sort([12,4,78,3,25,9,29]));

