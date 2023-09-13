# https://leetcode.com/problems/reverse-string/submissions/1048477674/

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        new_s = []
        for i in range(len(s) - 1, -1, -1):
            new_s.append(s[i])
        
        for i in range(len(new_s)):
            s[i] = new_s[i]
