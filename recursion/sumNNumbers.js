// let sumNNumbers = function(n) {
//     if(n!=0) {
//         return n+sumNNumbers(n-1);
//     } else {
//         return n;
//     }
// }

let sumNNumbers = function(n,sum) {
    if(n<1) {
        return sum;
    } else {
        return sumNNumbers(n-1,sum+n);
    }
}

console.log(sumNNumbers(10,0));