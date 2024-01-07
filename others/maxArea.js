/**
 * @param {number[]} height
 * @return {number}
 */
var maxWaterInContainer = function(height) {
    let maxArea = 0, left = 0, right = height.length - 1;

    while(left<right) {
        let distance = right - left;

        let length = Math.min(height[right], height[left]);

        let area = distance * length;

        maxArea = Math.max(maxArea, area);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

console.log(maxWaterInContainer([1,8,6,2,5,4,8,3,7]));