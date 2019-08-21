/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if (nums === null || nums.length === 0) return [
        []
    ];
    nums = nums.sort((a, b) => a - b);

    let result = [],
        cur = [];

    dfs(nums, result, cur, 0);
    return result;
};

const dfs = (nums, result, cur, idx) => {

    result.push(cur);

    for (let i = idx; i < nums.length; i++) {
        if (i > idx && nums[i] === nums[i - 1]) continue;

        let newArr = cur.concat(nums[i])
        dfs(nums, result, newArr, i + 1);
    }
}

/*


Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

*/