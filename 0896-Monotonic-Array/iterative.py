# https://leetcode.com/problems/monotonic-array/submissions/1062647979/

class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        is_increasing = None
        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                continue
            if is_increasing == None:
                is_increasing = nums[i-1] <= nums[i]
                continue
            if is_increasing != (nums[i-1] <= nums[i]):
                return False
        return True
