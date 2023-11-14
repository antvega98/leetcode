// https://leetcode.com/problems/linked-list-cycle/submissions/1098781099/

function hasCycle(head: ListNode | null): boolean {
    const set = new Set();

    while(head != null){
        if(set.has(head)){
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};
