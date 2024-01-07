function checkPalindrome(i,j,string) {
    if(i>=j) return true;
    else {
        if(string[i] != string[j]) return false;
        return checkPalindrome(i+1,j-1,string);
    }
}

let string = "sharukh";

console.log(checkPalindrome(0,string.length-1,string));