// https://leetcode.com/problems/linked-list-cycle/submissions/1098791366/

function hasCycle(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            return true;
        }
    }
    return false;
};
