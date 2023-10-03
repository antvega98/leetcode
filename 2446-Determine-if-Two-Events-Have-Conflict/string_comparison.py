# https://leetcode.com/problems/determine-if-two-events-have-conflict/submissions/1065464321/

class Solution:    
    def haveConflict(self, event1: List[str], event2: List[str]) -> bool:
        # compare 1st front and back with 2nd range
        if event2[0] <= event1[0] <= event2[1] or event2[0] <= event1[1] <= event2[1] :
            return True
        # compare 2nd front and back with 1st range
        if event1[0] <= event2[0] <= event1[1] or event1[0] <= event2[1] <= event1[1]:
            return True              
        return False
        
