/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var generateTrees = function(n) {
    if (n <= 0) {
        return [];
    }
    return dfs(1, n);
};

// min and max, confirm this tree range 
const dfs = (min, max) => {
    var result = [];
    if (min > max) {
        result.push(null);
        return result;
    }
    for (var i = min; i <= max; i++) {
        var leftList = dfs(min, i - 1);
        var rightList = dfs(i + 1, max);

        if (leftList.length === 0 && rightList.length === 0) {
            let curNode = new TreeNode(i);
            result.push(curNode);
        } else if (leftList.length === 0) {
            for (let right of rightList) {
                let curNode = new TreeNode(i);
                curNode.right = right;
                result.push(curNode)
            }
        } else if (rightList.length === 0) {
            for (let left of leftList) {
                let curNode = new TreeNode(i);
                curNode.left = left;
                result.push(curNode)
            }
        } else {
            for (var j = 0; j < leftList.length; j++) {
                for (var k = 0; k < rightList.length; k++) {
                    var curNode = new TreeNode(i);
                    curNode.left = leftList[j];
                    curNode.right = rightList[k];
                    result.push(curNode);
                }
            }
        }
    }
    return result;
}

console.log(generateTrees(3));