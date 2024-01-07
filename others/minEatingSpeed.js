/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let maxNum = Math.max(...piles);

    function totalTimeTaken(piles, currentTime) {
        let totalTime = 0;

        for (let i = 0; i < piles.length; i++) {
            totalTime += Math.ceil(piles[i] / currentTime);
        }

        return totalTime;
    }

    let low = 1, high = maxNum;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let timeTaken = totalTimeTaken(piles, mid);
        if (timeTaken <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
}


console.log(minEatingSpeed())