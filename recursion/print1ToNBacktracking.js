function print1ToNBacktracking(n) {
    if(n<1) return;
    print1ToNBacktracking(n-1);
    console.log(n);
}

print1ToNBacktracking(10);