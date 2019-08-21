/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    dfs(root);
};

const dfs = (root) => {
    if (root === null) return null;

    let leftLast = dfs(root.left);
    let rightLast = dfs(root.right);

    // 三部曲
    if (leftLast !== null) {
        //  1）右边的接到左边的后面
        leftLast.right = root.right;
        //  2）左边的接到root.right   
        root.right = root.left;
        //  3) 左边的 Node变成null
        root.left = null;
    }
    //  1）rightLast !== null 
    if (rightLast !== null) {
        return rightLast;
    }
    //  2) leftLast !== null 
    if (leftLast !== null) {
        return leftLast;
    }
    //  3) root 
    return root;
}


//   三部曲  1）右边的接到左边的后面    2）左边的接到root.right   3) 左边的 Node变成null
//   每次都要返回最后的一个Node的值，用于下次的衔接   
//      2               2
//    3   4                 3
//                              4