// Minimize (max(A[i], B[j], C[k]) – min(A[i], B[j], C[k])) of three different sorted arrays
// Given three sorted arrays A, B, and C of not necessarily same sizes. Calculate the minimum absolute difference between the maximum and minimum number of any triplet A[i], B[j], C[k] such that they belong to arrays A, B and C respectively, i.e., minimize (max(A[i], B[j], C[k]) – min(A[i], B[j], C[k]))
var maxMin3Arr = function (a, b, c) {
    let i=0,j=0,k=0,ans=+Infinity;

    while(i<a.length && j<b.length && k<c.length) {
        let minVal = Math.min(a[i],b[j],c[k]);
        let maxVal = Math.max(a[i],b[j],c[k]);
        let diff = maxVal - minVal;
        
        ans = Math.min(ans, diff);

        if(a[i] == minVal) {
            i++;
        } else if(b[j] == minVal) {
            j++
        } else {
            k++;
        }
    }

    return ans;
}

console.log(maxMin3Arr([1, 4, 5, 8, 10], [6, 9, 15], [2, 3, 6, 6]));