/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {

    let n = arr.length;

    function merge(arr, l, m, r) {
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = new Array(n1);
        var R = new Array(n2);

        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];


        var i = 0;
        var j = 0;
        var k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr, l, r) {
        if (l >= r) {
            return;
        }
        let mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    }

    mergeSort(arr, 0, n - 1);

    return arr[arr.length-k];
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));