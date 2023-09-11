# https://leetcode.com/problems/length-of-last-word/submissions/1034374892/

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.split()[-1])
