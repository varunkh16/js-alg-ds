/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let teams = n, matches = 0, totalMatches = 0;

    while(teams>1) {
        matches = Math.floor(teams/2);
        totalMatches+=matches;
        teams -= matches
    }

    return totalMatches;
};

console.log(numberOfMatches(7));