/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    let tmp = new ListNode(0);
    tmp.next = head;

    let current = tmp;

    // the two nodes would like to swap
    while (current.next !== null && current.next.next !== null) {

        let first_node = current.next,
            second_node = current.next.next;

        first_node.next = second_node.next;
        current.next = second_node;
        current.next.next = first_node;
        current = current.next.next;

    }

    return tmp.next;
};