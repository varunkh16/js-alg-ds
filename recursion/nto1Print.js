function nTo1Print(count) {
    if(count==0) return;
    console.log(count);
    count--;
    nTo1Print(count);
}


nTo1Print(1);