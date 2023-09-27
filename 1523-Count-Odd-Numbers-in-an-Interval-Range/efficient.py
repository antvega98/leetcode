# https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/submissions/1060855886/

class Solution:
    def countOdds(self, low: int, high: int) -> int:
        if low % 2 == 0 and high % 2 == 0:
            return (high - low) // 2
        return ((high - low) // 2) + 1
