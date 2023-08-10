# https://leetcode.com/problems/remove-trailing-zeros-from-a-string/submissions/1017704514/

import re
class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        return re.sub("0+$", '', num)
