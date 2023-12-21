// https://leetcode.com/problems/merge-two-sorted-lists/submissions/1124781092/
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let resHead = new ListNode();
    let traverse = resHead;
    
    while(list1 || list2){
        if(!list2 || (list1 && list1.val <= list2.val)){
            traverse.next = new ListNode(list1.val);
            list1 = list1.next;
        } else if (!list1 || (list2 && list2.val < list1.val)){
            traverse.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        traverse = traverse.next;
    }

    return resHead.next;
};
