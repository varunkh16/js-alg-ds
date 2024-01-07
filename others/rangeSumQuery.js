/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.preProcessedSum = [nums[0]];

    for(let i=1;i<nums.length;i++) {
        this.preProcessedSum.push(this.preProcessedSum[i-1]+nums[i]);
    }

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = this.preProcessedSum[right];
    if(left>0) {
        sum -= this.preProcessedSum[left-1];
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0,2));
console.log(obj.sumRange(2,5));
console.log(obj.sumRange(0,5));