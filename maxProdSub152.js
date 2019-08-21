/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let max = nums[0],
        maxSoFa = nums[0],
        minSoFa = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxSoFa *= nums[i];
        minSoFa *= nums[i];

        // if nums[i] is negative, swap max and min so far
        if (nums[i] < 0) {
            let tmp = maxSoFa;
            maxSoFa = minSoFa;
            minSoFa = tmp;
        }

        // continue previous optimal sub array 
        // or start a new one
        // [-2, -1, 0]
        maxSoFa = Math.max(maxSoFa, nums[i]);
        minSoFa = Math.min(minSoFa, nums[i]);
        max = Math.max(max, maxSoFa);
    }
    return max;
};