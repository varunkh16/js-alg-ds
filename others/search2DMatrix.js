var search2DMatrix = function(matrix, target) {
    let n = matrix.length, m = matrix[0].length;
    let high = n - 1, low = 0;

    function searchRow(row, target) {
        let low = 0, high = row.length - 1;

        while(low <= high) {
            let mid = Math.floor((low+high)/2);

            if(row[mid] == target) return mid;
            else if(row[mid] > target) high = mid - 1;
            else low = mid + 1;
        }
        return -1;
    }

    while(low<=high) {
        let mid = Math.floor((low+high)/2);

        if(matrix[mid][0] <= target && matrix[mid][m-1] >= target) {
            let index = searchRow(matrix[mid], target);

            if(index != -1) {
                return [mid, index];
            } else {
                return [-1,-1];
            }
        } else if(matrix[mid][0] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [-1,-1];
};


console.log(search2DMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 34));