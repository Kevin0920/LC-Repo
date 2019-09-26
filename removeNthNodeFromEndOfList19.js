/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**         
            head
            1   ->  2   ->  3   ->  4   ->  5
    0   ->  1   ->  2   ->  3   ->  4   ->  5
    dummy
    slow    fast
                            slow    delete  fast
 */
var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy,
        fast = head;

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

/*
Time complexity : O(L)O(L).

The algorithm makes two traversal of the list, first to calculate list length LL and second to find the (L - n)(L−n) th node. There are 2L-n2L−n operations and time complexity is O(L)O(L).

Space complexity : O(1)O(1).

We only used constant extra space.

*/