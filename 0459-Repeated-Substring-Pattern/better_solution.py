# https://leetcode.com/problems/repeated-substring-pattern/submissions/1030656548/

class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        len_s = len(s)
        for i in range(1, len(s)//2+1):
            if len_s % i == 0:
                if s[:i] * (len_s // i) == s:
                    return True
        return False
