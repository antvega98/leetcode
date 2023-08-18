# https://leetcode.com/problems/majority-element/submissions/1024410235/
# https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        i = 0
        x = nums[0]
        for num in nums:
            if i == 0:
                x = num
                i = 1
            elif x == num:
                i += 1
            else:
                i -= 1
        return x
