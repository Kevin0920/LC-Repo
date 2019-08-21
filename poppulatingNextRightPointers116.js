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
    if (!root) return null;;

    let pre = root,
        cur;

    while (pre && pre.left) {
        // cur go from left most to right most
        // 当前这个层的第一个值
        cur = pre;
        while (cur) {
            //      1
            //  2   ->  3
            //  c
            cur.left.next = cur.right;
            //          1
            //    2           3
            //  4   5       6   7
            if (cur.next) {
                cur.right.next = cur.next.left;
            }
            // move current level to next level node, then doing the same iterating
            cur = cur.next;
        }

        // pre iterate throught all left most node of every layer, (new level start) 遍历一层一层， 遍历跳下一层
        pre = pre.left;
    }
    return root;
};