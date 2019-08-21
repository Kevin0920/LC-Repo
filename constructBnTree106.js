/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    if (inorder === null || inorder.length === 0 || postorder === null || postorder.length === 0 || inorder.length !== postorder.length) {
        return null;
    }

    return helper(inorder, postorder);
};

const helper = (inorder, postorder) => {

    if (inorder === null || inorder.length === 0) return null;

    let val = postorder.pop();
    let root = new TreeNode(val);
    let index = inorder.indexOf(val);
    let i = 0;

    while (i < inorder.length && inorder[i] !== val) {
        i++;
    }

    let leftList = inorder.slice(0, i);
    let rightList = inorder.slice(i + 1);
    root.left = helper(leftList, postorder.slice(0, i));
    root.right = helper(rightList, postorder.slice(i));

    return root;
}

/**
 * 
 *   
   9     3     15 20 7
  left  root  right

   9     15 7 20   3
  left  right     root

  
 * Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

 */