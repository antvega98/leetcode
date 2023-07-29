# https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/1007188262/

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        sorted_list = sorted(nums)
        d = {}
        ans = []
        for i, num in enumerate(sorted_list):
            if num not in d:
                d[num] = i
        for num in nums:
            ans.append(d[num])
        return ans
