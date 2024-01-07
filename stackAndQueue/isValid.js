/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracketMap = {
        "[": "]",
        "{": "}",
        "(": ")"
    };
    let openingBrackets = Object.keys(bracketMap);
    let stackArr = [];
    for(let i=0;i<s.length; i++) {
        if(openingBrackets.includes(s[i])) {
            stackArr.push(s[i]);
        } else {
            if(stackArr.length == 0) {
                return false;
            } else {
                let ch = stackArr.pop();
                if(bracketMap[ch] != s[i]) {
                    return false;
                }
            }
        }
    }
    return true;
};

console.log(isValid("(]"));