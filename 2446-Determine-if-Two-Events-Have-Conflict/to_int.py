#  https://leetcode.com/problems/determine-if-two-events-have-conflict/submissions/1065443018/

class Solution:   
    def timeToInt(self, time) -> int:
        return int(time[0:time.find(":")] + time[time.find(":") + 1:])

    def haveConflict(self, event1: List[str], event2: List[str]) -> bool:
        new_event_1 = [self.timeToInt(event1[0]), self.timeToInt(event1[1])]
        new_event_2 = [self.timeToInt(event2[0]), self.timeToInt(event2[1])]

        if new_event_1[0] <= new_event_2[0] <= new_event_1[1]:
            return True
        if new_event_1[0] <= new_event_2[1] <= new_event_1[1]:
            return True      

        if new_event_2[0] <= new_event_1[0] <= new_event_2[1]:
            return True
        if new_event_2[0] <= new_event_1[1] <= new_event_2[1]:
            return True      
