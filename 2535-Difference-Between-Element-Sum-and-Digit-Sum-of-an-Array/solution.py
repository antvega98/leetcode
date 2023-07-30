# https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/1007983152/

class Solution:

    def findDigitSum(self, nums: List[int]) -> int:
        digit_sum = 0
        for num in nums:
            while num != 0:
                digit_sum += num % 10
                num = num // 10
        return digit_sum

    def differenceOfSum(self, nums: List[int]) -> int:
        return abs(sum(nums) - self.findDigitSum(nums))
