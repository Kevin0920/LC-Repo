/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // calculate lefts to result array, left to right
    // calculate rights to result array, right to left

    let len = nums.length,
        result = new Array(len);
    result[0] = 1;

    for (let i = 1; i < len; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let right = 1;
    for (let i = len - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
};