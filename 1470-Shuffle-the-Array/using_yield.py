# https://leetcode.com/problems/shuffle-the-array/submissions/1023446979/

class Solution:
    def getShuffled(self, nums: List[int], n: int) -> List[int]:
        for i in range(n):
            yield nums[i]
            yield nums[i + n]
            
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        return list(self.getShuffled(nums,n))
