var trappingRainWater = function(nums) {
    let leftMax = [];
    let rightMax = [];

    let currentleftMax = 0;
    for(let i=0;i<nums.length;i++) {
        leftMax.push(currentleftMax);
        currentleftMax = Math.max(currentleftMax, nums[i]);
    }

    let currentrightMax = 0;
    for(let i=nums.length-1; i>=0; i--) {
        rightMax.push(currentrightMax);
        currentrightMax = Math.max(currentrightMax, nums[i]);
    }

    let left = 0;
    let right = rightMax.length -1;

    while(left<right) {
        [rightMax[left],rightMax[right]] = [rightMax[right],rightMax[left]];
        left++;
        right--;
    }

    let result = 0;
    for(let i=0;i<nums.length;i++) {
        let quantity = Math.min(rightMax[i],leftMax[i]) - nums[i];
        if(quantity > 0) {
            result+=quantity;
        }
    }

    return result;
};

console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));

var trappingRainWaterOptimized = function(nums) {
    let totalWater = 0;
    let leftMax = 0, rightMax = 0, left = 0, right = nums.length - 1;

    while(left<right) {
        let capacity = 0;
        if(leftMax<=rightMax) {
            if(nums[left]>leftMax) {
                leftMax = nums[left];
            } else {
                capacity = leftMax - nums[left];
                if(capacity>0) {
                    totalWater+=capacity;
                }
            }
            left++;
        } else {
            if(nums[right]>rightMax) {
                rightMax = nums[right];
            } else {
                capacity = rightMax - nums[right];
                if(capacity>0) {
                    totalWater+=capacity;
                }
            }
            right--;
        }
    }

    return totalWater;
};

console.log(trappingRainWaterOptimized([0,1,0,2,1,0,1,3,2,1,2,1]));