# https://leetcode.com/problems/number-of-segments-in-a-string/submissions/1047949117/

class Solution:
    def countSegments(self, s: str) -> int:
        start = False
        res = 0
        for char in s:
            if char != ' ':
                if not start:
                    res += 1
                start = True
            else:
                start = False
        return res
