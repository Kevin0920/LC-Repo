/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // edge case
    if (root === null) return root;

    let current = root;
    while (current !== null) {
        // connect left and right subtree roots first
        if (current.left !== null && current.right !== null) {
            current.left.next = current.right;
        }

        // find left subtree node that we need to connect
        const left = current.right || current.left;
        if (left !== null) {
            // find node to connect by following link to next node
            let next = current.next;
            let right = null;
            while (next !== null && right === null) {
                right = next.left || next.right;
                next = next.next;
            }
            left.next = right;
        }

        current = current.next;
    }

    // check if left/right nodes exist before calling
    if (root.left) connect(root.left);
    if (root.right) connect(root.right);

    return root;
};