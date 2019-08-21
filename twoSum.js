/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i];
        console.log(val)
        if (val in map) {
            return [map[val], i];
        } else {
            map[nums[i]] = i;
            console.log(map);
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

/*


Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


*/