# https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/submissions/1030015480/

class Solution:

    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        ans = 0
        count = 0
        for num in nums:
            if num > threshold:
                count = 0
                continue
            if num % 2 == count % 2:
                count += 1
            else:
                count = 1 if num % 2 == 0 else 0
            ans = max(ans, count)
        return ans
