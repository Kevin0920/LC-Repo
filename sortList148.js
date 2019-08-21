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
var sortList = function(head) {

    if (head === null || head.next === null) return head;

    let slow = head,
        fast = head.next; // 需要先走一步，原因是，对于偶数长度，mid 可以在一半的地方分割

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    const mid = slow.next; // slow will be at mid, then cut the list into two lists, call recursion divid to small parts. do merge sort
    slow.next = null;

    let l1 = sortList(head),
        l2 = sortList(mid);

    let sorted_list = new ListNode(0),
        current_node = sorted_list;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current_node.next = l1;
            l1 = l1.next;
        } else {
            current_node.next = l2;
            l2 = l2.next;
        }
        current_node = current_node.next;
    }
    if (l1 !== null) {
        current_node.next = l1;
        l1 = l1.next;
    }

    if (l2 !== null) {
        current_node.next = l2;
        l2 = l2.next;
    }


    return sorted_list.next;

};

/*

Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

*/