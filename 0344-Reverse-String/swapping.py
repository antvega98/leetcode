# https://leetcode.com/problems/reverse-string/submissions/1048479496/

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        front = 0
        back = len(s) - 1

        while front < back:
            s[front], s[back] = s[back], s[front]
            front += 1
            back -= 1
