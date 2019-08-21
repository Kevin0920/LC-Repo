/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {

    if (n < 1) {
        return 0;
    }
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) { // 总左边的树节点 0个节点到 i个节点，总的节点数减一
            dp[i] += dp[j] * dp[i - j - 1]
        }
    }
    return dp[n]
};

/**

思路这道题目采用动态规划解决，提到动态规划首先需要定义状态：dp[n]表示n个节点可以构建的二叉搜索树的数目。

接下来就是状态转移公式。

当n=1时：
n = 1
dp[1] = 1

当n=2时：
n = 2
  1      2
   \    /
    2  1

  dp[2] = 2

当n=3时:

  n = 3

  1       1        2      3       3         
   \       \      / \    /       /
    2       3    1   3  1       2
     \     /             \     /
      3   2               2   1

  dp[3] = 5

如果你观察地仔细，那么可以将上述三种情况归纳为：

  dp[1] = dp[0] * dp[0]

  dp[2] = dp[0] * dp[1] + dp[1] * dp[0]

  dp[3] = dp[0] * dp[2] + dp[1] * dp[1] + dp[2] * dp[0]


Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3


 */