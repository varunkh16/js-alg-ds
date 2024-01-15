/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let sMap = {}, ans = 0;

    for(let i=0;i<s.length;i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    }

    for(let i=0;i<t.length;i++) {
        if(sMap[t[i]] && sMap[t[i]] > 0) {
            sMap[t[i]]--;
        }
    }

    for(const key of Object.keys(sMap)) {
        ans+=sMap[key];
    } 

    return ans;
};

console.log(minSteps("leetcode", "practice"));