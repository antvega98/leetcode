# https://leetcode.com/problems/number-of-beautiful-pairs/submissions/1031766511/

import math

class Solution:
    def getFirstDigit(self, num):
        return num // (10 ** int(math.log10(num)))

    def isCoPrime(self, num1, num2):
        min_ = min(num1, num2)
        max_ = max(num1, num2)

        while min_ != 0:
            t = min_
            min_ = max_ % min_
            max_ = t

        return max_ == 1

    def countBeautifulPairs(self, nums: List[int]) -> int:
        res = 0
        first_digits = {}
        for num in nums:
            first = self.getFirstDigit(num)
            last = num % 10
            for digit, count in first_digits.items():
                if self.isCoPrime(digit, last):
                    res += count
            first_digits[first] = first_digits.get(first, 0) + 1

        return res
