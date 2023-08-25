# https://leetcode.com/problems/check-if-array-is-good/submissions/1031783985/

class Solution:
    def isGood(self, nums: List[int]) -> bool:
        m = max(nums)
        if m + 1 != len(nums):
            return False

        d = {}
        for num in nums:
            d[num] = d.get(num, 0) + 1

        cur_count = 1
        for num, count in d.items():
            if cur_count not in d:
                return False
            if num == m and count != 2:
                return False
            if num == m - 1 and count != 1:
                return False
            cur_count += 1
        return True
