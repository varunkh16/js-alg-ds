function fibonacii(n) {
    if(n<=1) return n;
    else return fibonacii(n-1) + fibonacii(n-2);
}

console.log(fibonacii(4));