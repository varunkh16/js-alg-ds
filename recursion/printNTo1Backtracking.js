function printNTo1Backtracking(i,n) {
    if(i>n) return;
    printNTo1Backtracking(i+1,n);
    console.log(i);
}

printNTo1Backtracking(1,10);