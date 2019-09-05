/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = [];
    dfs(root, result); // inorder traversals

    return result[k - 1];
};

const dfs = (root, result) => {
    // 出口
    if (root === null) return;

    // inorder: left -> root -> right
    if (root) {
        if (root.left) {
            dfs(root.left, result);
        }
        if (!result.includes(root.val)) {
            result.push(root.val);
        }
        if (root.right) {
            dfs(root.right, result);
        }
    }
}