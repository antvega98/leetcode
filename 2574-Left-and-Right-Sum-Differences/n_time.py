# https://leetcode.com/problems/left-and-right-sum-differences/

class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        total = sum(nums)

        l_total = 0
        for i in range(len(nums)):
            cur = nums[i]
            total -= cur
            nums[i]=(abs(l_total- total))
            l_total += cur  
        return nums
