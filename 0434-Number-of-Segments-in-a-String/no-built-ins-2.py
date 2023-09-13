# https://leetcode.com/problems/number-of-segments-in-a-string/submissions/1047954845/

class Solution:
    def countSegments(self, s: str) -> int:
        res = 0
        prev = ' '
        for char in s:
            if prev == ' ' and char != ' ':
                res += 1
            prev = char
        return res
