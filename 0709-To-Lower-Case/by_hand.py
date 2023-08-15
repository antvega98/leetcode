# https://leetcode.com/problems/to-lower-case/submissions/1022274115/

class Solution:
    def toLowerCase(self, s: str) -> str:
        n = ""
        for char in s:
            if 65 <= ord(char) <= 90:
                n += chr(ord(char) + 32)
            else:
                n += char
        return n
