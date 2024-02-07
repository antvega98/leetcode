// https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/1169107427/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // get lengths of a and b
    let lenA = 0;
    let node = headA;
    while(node) {
        ++lenA;
        node = node.next;
    }

    let lenB = 0;
    node = headB;
    while(node) {
        ++lenB;
        node = node.next;
    }

    // line up lists
    while(lenA > lenB) {
        headA = headA.next;
        --lenA;
    }
    while(lenA < lenB) {
        headB = headB.next;
        --lenB;
    }

    // get intersection
    while(headA != headB) {
        headA = headA.next;
        headB = headB.next;
    }
    
    return headA;
};
