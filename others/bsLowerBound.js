var bsLowerBound = function(nums, target) {
    let n=nums.length, low = 0, high = n-1, ans = n;

    while(low<=high) {
        let mid = Math.floor((high+low)/2);

        if(nums[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}

var bsUpperBound = function(nums, target) {
    let n=nums.length, low = 0, high = n-1, ans = n;

    while(low<=high) {
        let mid = Math.floor((high+low)/2);

        if(nums[mid] < target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}

console.log(bsLowerBound([1,2,3,3,5,8,8,10,10,11],1));