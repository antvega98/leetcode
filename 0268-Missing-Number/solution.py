# https://leetcode.com/problems/missing-number/description/

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        total = len(nums)
        sum_seq = (total * (1 + total)) // 2
        for num in nums:
            sum_seq -= num
        return sum_seq
