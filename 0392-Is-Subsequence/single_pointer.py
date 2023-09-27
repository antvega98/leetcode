# https://leetcode.com/problems/is-subsequence/submissions/1060839334/

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_ptr = 0
        for char in t:
            if s_ptr < len(s) and char == s[s_ptr]:
                s_ptr += 1
        return s_ptr == len(s)
