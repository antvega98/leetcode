# https://leetcode.com/problems/check-if-array-is-good/submissions/1031787439/

class Solution:
    def isGood(self, nums: List[int]) -> bool:
        n = max(nums)
        if n + 1 != len(nums):
            return False

        nums.sort()
        for i, val in enumerate(nums[:len(nums)-1]):
            if i + 1 != val:
                return False

        return True
