# https://leetcode.com/problems/rings-and-rods/submissions/1019637316/

class Solution:
    def countPoints(self, rings: str) -> int:
        d = {}
        for i in range(0, len(rings), 2):
            if rings[i + 1] not in d:
                d[rings[i + 1]] = 0
            if rings[i] == 'R':
                d[rings[i + 1]] |= 1
            elif rings[i] == 'G':
                d[rings[i + 1]] |= 2
            else:
                d[rings[i + 1]] |= 4
            
        return sum(val == 7 for val in d.values())
