# https://leetcode.com/problems/power-of-three/submissions/1025195379/
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        i = 1
        while i < n:
            i *= 3
        return i == n
