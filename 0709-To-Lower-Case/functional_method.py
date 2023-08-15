# https://leetcode.com/problems/to-lower-case/submissions/1022281594/

class Solution:
    def toLowerCase(self, s: str) -> str:
        return "".join(map(lambda char: chr(ord(char) + 32) if 65 <= ord(char) <= 90 else char, s))
