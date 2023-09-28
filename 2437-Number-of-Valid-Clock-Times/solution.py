# https://leetcode.com/problems/number-of-valid-clock-times/submissions/1061802650/
class Solution:
    def countTime(self, time: str) -> int:
        res = 1
        if time[0] == '?' and time[1] == '?':
            res = 24
        elif time[0] == '?':
            res = 3 if time[1] < '4' else 2
        elif time[1] == '?':
            res = 10 if time[0] < '2' else 4
        
        if time[3] == '?':
            res *= 6
        if time[4] == '?':
            res *= 10
        
        return res
