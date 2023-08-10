# https://leetcode.com/problems/remove-trailing-zeros-from-a-string/submissions/1017682071/

class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        i = len(num) - 1
        while num[i] == "0" and i >= 0:
            i -= 1
        return num[:i+1]
