/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [],
        cur = [],
        used = [];
    if (nums === null || nums.length === 0) return result;

    // array may not be in order, so sort it 
    nums = nums.sort((a, b) => a - b);

    helper(nums, cur, result, used);

    return result;
};

const helper = (nums, cur, result, used) => {

    // 这个递归停止，就是当前数组的 size === nums.length。 就是3等于3，这时候停止把随机的数组，放入result。成为其中的例子结果
    if (cur.length === nums.length) {
        result.push(cur.slice(0));
        return;
    }

    let preNum = nums[0] - 1;
    // 遍历数组
    for (let i = 0; i < nums.length; i++) {

        if (!used[i] && nums[i] !== preNum) {
            preNum = nums[i];
            used[i] = true;

            cur.push(nums[i]);
            helper(nums, cur, result, used);
            used[i] = false;
            cur.pop();
        }
    }

}

console.log(permuteUnique([1, 1, 2]));


/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/