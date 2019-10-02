/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let result = [];
    dfs(k, n, result, [], 1);

    return result;
};

const dfs = (k, target, result, subset, idx) => {

    if (target === 0 && subset.length === k) {
        result.push(subset.slice());
        return;
    }

    if (target < 0 || subset.length > k) return;

    for (let i = idx; i <= 9; i++) {
        if (i > target) continue;
        subset.push(i);
        dfs(k, target - i, result, subset, i + 1); // i + 1 是取下一个数， 而不取当前这个数
        subset.pop();
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