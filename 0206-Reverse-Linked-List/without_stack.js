// https://leetcode.com/problems/reverse-linked-list/submissions/1159587173/

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

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    while(head){
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
