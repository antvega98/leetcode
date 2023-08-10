# https://leetcode.com/problems/remove-trailing-zeros-from-a-string/submissions/1017692331/

class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        return num.rstrip("0")
