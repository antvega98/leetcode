# https://leetcode.com/problems/rings-and-rods/submissions/1019633529/

class Solution:
    def countPoints(self, rings: str) -> int:
        d = {}
        for i in range(0, len(rings), 2):
            if rings[i + 1] not in d:
                d[rings[i + 1]] = ""
            d[rings[i + 1]] += rings[i]
        
        count = 0
        for value in d.values():
            if 'R' in value and 'G' in value and 'B' in value:
                count += 1
        return count
