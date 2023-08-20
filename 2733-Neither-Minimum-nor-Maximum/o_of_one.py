# https://leetcode.com/problems/neither-minimum-nor-maximum/submissions/1027065495/

class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        return sorted(nums[:3])[1] if len(nums) >= 3 else -1
