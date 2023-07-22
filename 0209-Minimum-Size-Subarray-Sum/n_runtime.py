# https://leetcode.com/problems/minimum-size-subarray-sum/submissions/1000954575/


import sys
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min_len = sys.maxsize
        left = 0
        right = 0

        cur_sum = 0
        for right in range(len(nums)):
            cur_sum += nums[right]

            while cur_sum >= target:
                min_len = min(min_len, right - left + 1)
                cur_sum -= nums[left]
                left += 1
        return 0 if min_len == sys.maxsize else min_len
