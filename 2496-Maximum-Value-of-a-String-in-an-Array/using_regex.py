# https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/submissions/1054063991/

import re
class Solution:
    def isNumber(self, num: str) -> bool:
        return re.fullmatch('[0-9]+', num)

    def maximumValue(self, strs: List[str]) -> int:
        max_len = -1
        for num in strs:
            if self.isNumber(num):
                n = int(num)
                if n > max_len:
                    max_len = n
            else:
                num_len = len(num)
                if num_len > max_len:
                    max_len = num_len
        return max_len
