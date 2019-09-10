// const addTwoNums = (nums1, nums2) => {
//     if (nums1 === null || nums1.length === 0 || nums2 === null || nums2.length === 0) {
//         return [];
//     }

//     let sum = nums1.map((num, idx) => {
//         num += nums2[idx];
//         return num;
//     })

//     return sum;
// }

// console.log(addTwoNums([], []));
// console.log(addTwoNums([1, 2, 3], [1, 2, 3]));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var addTwoNumbers = function(l1, l2) {

    let dummy = new ListNode(0);
    let p = dummy;
    let carry = 0;
    while (l1 != null || l2 != null) {
        let val1 = l1 === null ? 0 : l1.val;
        let val2 = l2 === null ? 0 : l2.val;
        let sum = carry + val1 + val2;
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }

        let lastDigit = sum % 10; // : 12 / 10 = 1.2 module
        p = p.next = new ListNode(lastDigit);
        console.log(p)
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry === 1) {
        p.next = new ListNode(carry);
    }
    return dummy.next;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));