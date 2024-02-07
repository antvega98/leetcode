// https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/1168380345/

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
    const s = new Set();
    while(headA) {
        s.add(headA);
        headA = headA.next;
    }
    while(headB){
        if(s.has(headB)) return headB;
        headB = headB.next;
    }
    return null;
};
