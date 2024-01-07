var aggressiveCows = function(stalls, k) {

    stalls = stalls.sort((a,b) => a-b);

    function canBePlaced(stalls, n, k) {
        let count = 1, lastPlacedCow = stalls[0];

        for(let i=1; i<stalls.length; i++) {
            if((stalls[i] - lastPlacedCow) >= n) {
                count++;
                lastPlacedCow = stalls[i];
            }
            if(count == k) return true;
        }

        return false;
    }

    let n = stalls.length, low = 1, high = stalls[n-1] - stalls[0];

    while(low<=high) {

        let mid = Math.floor((low + high)/2);

        let res = canBePlaced(stalls, mid, k);

        if(res == true) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return high;
}


console.log(aggressiveCows([0,3,4,7,10,9],4));