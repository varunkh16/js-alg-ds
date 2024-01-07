var searchRotatedArrayBS = function(array, target) {
    function getPivot(array) {
        let low = 0, high = array.length - 1;

        while(low<high) {
            let mid = Math.floor((high+low)/2);

            if(array[mid]<array[high]) high = mid;
            else low = mid + 1;
        }

        return high;
    }

    function BS(array, target, low, high) {

        while(low<=high) {
            let mid = Math.floor((high+low)/2);

            if(array[mid] == target) return mid;
            else if(array[mid] < target) low = mid + 1;
            else high = mid - 1;
        }

        return -1;
    }

    let pivot = getPivot(array);

    if(pivot == 0) return BS(array, target, 0, array.length - 1);
    else if(target>=array[0])  return BS(array, target, 0, pivot - 1);
    else if(target<array[0]) return BS(array, target, pivot, array.length - 1);
}

console.log(searchRotatedArrayBS([7,8,9,1,2,3,4,5,6],6));