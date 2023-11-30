// https://leetcode.com/problems/linked-list-cycle-ii/submissions/1109298516/

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

function detectCycle(head: ListNode | null): ListNode | null {
    let node = getMeetingSpot(head);
    if(node === null) return null;
    let cycleLength = countNodesInCycle(node);

    let slow = head;
    let fast = getNodeAtIndex(head, cycleLength);
    while(slow !== fast){
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};

function getMeetingSpot(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            return fast;
        }
    }
    return null;
}

function countNodesInCycle(node: ListNode | null) : number {
    let traverse = node.next;
    let count = 1;
    while(traverse !== node){
        traverse = traverse.next;
        ++count;
    }
    return count;
}

function getNodeAtIndex(node: ListNode | null, i: number) : ListNode {
    return i === 0 ? node : getNodeAtIndex(node.next, i - 1);
}
