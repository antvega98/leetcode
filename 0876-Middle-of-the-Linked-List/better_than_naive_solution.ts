// https://leetcode.com/problems/middle-of-the-linked-list/submissions/1107859914/

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

function middleNode(head: ListNode | null): ListNode | null {
    let nodes:ListNode[] = [];
    while(head){
        nodes.push(head);
        head = head.next;
    }
    return nodes[Math.floor(nodes.length / 2)];
};

function findLength(head: ListNode | null): number {
    let len = 0;
    while(head){
        head = head.next;
        ++len;
    }
    return len;
}
