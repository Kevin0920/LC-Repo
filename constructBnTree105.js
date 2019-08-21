/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Time complexity - O(N) because each node is visited once.
Space complexity - O(4^L), where L is the number of levels of the tree, in each recursion 4 variables are defined. In the best case scenario where the tree is a balanced tree, L = logN.
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    if (preorder === null || inorder === null || preorder.length === 0 || inorder.length === 0 || preorder.length !== inorder.length) {
        return null;
    }
    // recurse, use preorder finding root
    // split inorder with root, to left and right subtree
    return helper(preorder, inorder);
};

const helper = (preorder, inorder) => {

    if (inorder === null || inorder.length === 0) return null;

    let val = preorder.shift(); // first value is root val in preorder
    let root = new TreeNode(val);

    let i = 0; // find the val in inorder array 

    while (i < inorder.length) {
        if (inorder[i] === val) {
            break;
        }
        i++; // keep finding the val in preorder
    }

    let leftList = inorder.slice(0, i);
    let rightList = inorder.slice(i + 1); // slicing mid (root or 3) until the end of inorder  
    root.left = helper(preorder, leftList);
    root.right = helper(preorder, rightList);

    return root;
}

/*

105. Construct Binary Tree from Preorder and Inorder Traversal
Medium

1934

54

Favorite

Share
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

*/