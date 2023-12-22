// https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/1125590539/

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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let traverse = head;
    while(traverse && traverse.next){
        if(traverse.val === traverse.next.val){
            traverse.next = traverse.next.next;
            continue;
        }
        traverse = traverse.next;
    }
    return head;
};
