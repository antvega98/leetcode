// https://leetcode.com/problems/merge-k-sorted-lists/submissions/1116054399/

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const pq = new MinPriorityQueue();

    for(let head of lists){
        while(head){
            pq.enqueue(head.val);
            head = head.next;
        }
    }

    let dummy = new ListNode();
    let traverse = dummy;

    while(pq.size() > 0){
        traverse.next = new ListNode(pq.dequeue().element);
        traverse = traverse.next;
    }

    return dummy.next;
};
