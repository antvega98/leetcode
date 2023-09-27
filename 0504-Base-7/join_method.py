# https://leetcode.com/problems/base-7/submissions/1060586147/
class Solution:
    def convertToBase7(self, num: int) -> str:
        isNeg = "-" if num < 0 else ""
        num = abs(num)
        res = []
        while num > 0:
            res.append(str(num % 7))
            num //= 7

        return isNeg + "".join(res[::-1]) if len(res) > 0 else "0"
