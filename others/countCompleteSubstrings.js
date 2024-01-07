// 100145. Count Complete Substrings

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countCompleteSubstrings = function(word, k) {
    let hashMap = {};
    
    for(let i=0;i<word.length;i++) {
        let character = word[i];
        if(!hashMap[character]) {
            hashMap[character] = [i, 1];
        } else {
            let count = hashMap[character][1];
            let lastOccurance = hashMap[character][0];
            
            if(count>=k) {
                delete hashMap[character];
            } else {
                let diff = i - lastOccurance;
                if(diff <= 3) {
                    hashMap[character][0]=i;
                    hashMap[character][1]+=1;
                } else {
                    delete hashMap[character];
                }
            }
        }
    }
    
    let chars = Object.keys(hashMap);
    let count = 0
    for(let i=0;i<chars.length;i++) {
        if(hashMap[chars[i]][1] != k) {
            delete hashMap[chars[i]];
        } else {
            if(k==1 && hashMap[chars[i]][1]==1) {
                count+=(hashMap[chars[i]][1]);
            } else {
                count+=(hashMap[chars[i]][1]-1);
            }
        }
    }
    
    return count;
};


console.log(countCompleteSubstrings("ba",1));