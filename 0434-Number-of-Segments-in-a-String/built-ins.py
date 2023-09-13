# https://leetcode.com/problems/number-of-segments-in-a-string/submissions/1047944714/

class Solution:
    def countSegments(self, s: str) -> int:
        return len(s.split())
