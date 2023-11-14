// https://leetcode.com/problems/linked-list-cycle/submissions/1098788097/

function hasCycle(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;

    while(fast){
        fast = fast.next;
        if(fast == slow){
            return true;
        }
        if(fast == null){
            return false;
        }
        fast = fast.next;
                if(fast == slow){
            return true;
        }
        if(fast == null){
            return false;
        }
        slow = slow.next
    }
    return false;
};
