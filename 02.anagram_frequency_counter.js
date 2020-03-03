function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    var frequencyCounter1 = {};

    for(let i=0; i<str1.length; i++) {
        frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
    }

    for(let i=0; i<str2.length; i++) {
        let key = str2[i];
        if(!frequencyCounter1[key]) {
            return false;
        } else {
            frequencyCounter1[key] -= 1;
        }
    }

    return true;
}
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true