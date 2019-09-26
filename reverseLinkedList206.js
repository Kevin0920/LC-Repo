/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 
    pre ->  1->2->3->4->5->NULL
            c
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let pre = null,
        cur = head;

    while (cur !== null) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }

    return pre;

};