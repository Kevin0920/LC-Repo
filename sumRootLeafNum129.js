/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    return dfs(root, 0);
};

const dfs = (node, prefix) => {
    if (node === null) return 0;

    //     如果当前是无子节点的叶子节点，返回结果。就是root本身的值
    if (!node.left && !node.right) return prefix * 10 + node.val;

    if (node.left && node.right) {
        return dfs(node.left, prefix * 10 + node.val) + dfs(node.right, prefix * 10 + node.val);
    }

}

/*

Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 4

*/