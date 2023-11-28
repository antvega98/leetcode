// https://leetcode.com/problems/middle-of-the-linked-list/submissions/1107859998/

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
