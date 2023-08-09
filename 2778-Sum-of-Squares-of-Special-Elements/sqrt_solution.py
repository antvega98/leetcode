# https://leetcode.com/problems/sum-of-squares-of-special-elements/submissions/1016745073/

class Solution:
    def sumOfSquares(self, nums: List[int]) -> int:
        total = 0
        n = len(nums)
        
        i = 0
        while (i + 1) ** 2 <= n:
            if n % (i + 1) == 0:
                total += nums[i] ** 2
            
                c = n // (i + 1)
                if c != (i + 1):
                    total += nums[c - 1] ** 2
            i += 1

        return total
