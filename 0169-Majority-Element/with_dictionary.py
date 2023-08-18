# https://leetcode.com/problems/majority-element/submissions/1024406922/

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        d = {}
        for num in nums:
            d[num] = d[num] + 1 if num in d else 1

        for key, value in d.items():
            if value > len(nums) // 2:
                return key
        return 0
