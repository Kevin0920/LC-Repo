/**
 * @param {number[]} nums
 * @return {number}
    等差数列公式：  (n + 1) * n / 2
 */
var missingNumber = function(nums) {
    let n = nums.length,
        sum = 0;

    let noMissingSum = Math.floor((n + 1) * n / 2); // no missing num, the supposed sum;
    console.log(noMissingSum)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; // missing a number is sum;
    }

    return noMissingSum - sum; // missing num value
};
/**
* @param {number[]} nums
* @return {number}
   等差数列公式：  (n + 1) * n / 2
*/
var missingNumber = function(nums) {
    let n = nums.length,
        sum = 0;

    let noMissingSum = Math.floor((n + 1) * n / 2); // no missing num, the supposed sum;
    console.log(noMissingSum)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; // missing a number is sum;
    }

    return noMissingSum - sum; // missing num value
};

/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
*/