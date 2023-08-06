# https://leetcode.com/problems/number-of-good-pairs/submissions/1013902943/

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        d = {}

        for i in range(len(nums)):
            if nums[i] not in d:
                d[nums[i]] = 0
            d[nums[i]] += 1
        
        count = 0
        for val in d.values():
            count += (val * (val - 1)) // 2
        
        return count
