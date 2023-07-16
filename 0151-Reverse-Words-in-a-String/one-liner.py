# https://leetcode.com/problems/reverse-words-in-a-string/description/

class Solution:
    def reverseWords(self, s: str) -> str:
        # One banger
        return " ".join(str(si) for si in s.split()[::-1])
