/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums === null || nums.length === 0) return 0;
    let res = 0,
        last = 0,
        cur = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        cur = Math.max(cur, i + nums[i]);
        if (i === last) {
            last = cur;
            console.log('aaa  ', last)
            res++;
            if (cur >= nums.length - 1) {
                break;
            }
        }
    }

    return res;

};
console.log(jump([2, 3, 1, 1, 4]));
/*
    [2,3,1,1,4]



        Given an array of non-negative integers, you are initially positioned at the first index of the array.

        Each element in the array represents your maximum jump length at that position.

        Your goal is to reach the last index in the minimum number of jumps.

        Example:

        Input: [2,3,1,1,4]
        Output: 2
        Explanation: The minimum number of jumps to reach the last index is 2.
            Jump 1 step from index 0 to 1, then 3 steps to the last index.


*/
3