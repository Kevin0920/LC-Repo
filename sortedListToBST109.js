/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 
        将链表的值存储为数组.
        通过二分查找法, 将中间值作为node, 左边值为node.left, 右边值为node.right;
        不断递归
 */
var sortedListToBST = function(head) {
    const nodes = [];
    while (head) {
        nodes.push(head.val);
        head = head.next;
    }

    const root = tree(nodes);

    return root;
};

const tree = (arr) => {
    if (arr.length === 0) return null;
    const node = new TreeNode();
    if (arr.length === 1) {
        node.val = arr[0];
    } else {
        const mid = parseInt(arr.length / 2);
        node.val = arr[mid];
        node.left = tree(arr.slice(0, mid));
        node.right = tree(arr.slice(mid + 1));
    }
    return node;
}