/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

    if (n <= 0 || k <= 0) return [];
    const result = [],
        cur = [];

    dfs(1, n, k, cur, result)
    return result
};

const dfs = (start_num, n, k, cur, result) => {
    if (cur.length === k) {
        result.push(cur.slice())
        return
    }

    for (let i = start_num; i <= n; i++) {
        cur.push(i)
        dfs(i + 1, n, k, cur, result)
        cur.pop()
    }
}

/*

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

*/