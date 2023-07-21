# https://leetcode.com/problems/decompress-run-length-encoded-list/submissions/999809408/

class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        ans = []
        for i in range(0,len(nums),2):
            ans += [nums[i + 1]] * nums[i]
        return ans
