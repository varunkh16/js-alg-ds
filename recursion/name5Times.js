let count = 0;

function recursionName(name) {
    if(count == 5) return;
    console.log(name);
    count++;
    recursionName(name);
}

recursionName("Hello");