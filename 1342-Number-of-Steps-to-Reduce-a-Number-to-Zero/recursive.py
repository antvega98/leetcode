# https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/1041614091/

class Solution:
    def numberOfSteps(self, num: int) -> int:
        if num == 0:
            return 0
        return 1 + self.numberOfSteps(num - 1 if num % 2 != 0 else num // 2)
