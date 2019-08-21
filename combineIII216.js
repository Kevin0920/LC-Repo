/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function(k, n) {
    if (k === 0 || n === 0) return [];
    let result = [],
        subSet = [];
    dfs([1, 2, 3, 4, 5, 6, 7, 8, 9], k, n, result, subSet, 0);
    return result;
};


const dfs = (nums, k, n, result, subSet, index) => {

    if (k === subSet.length && n === 0) {
        result.push(subSet.slice());
        return;
    }

    for (let i = index; i < nums.length; i++) {
        subSet.push(nums[i]);
        dfs(nums, k, n - nums[i], result, subSet, i + 1);
        subSet.pop();
    }
}

console.log(combinationSum3(3, 9));


/**
 * 
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
 
 */