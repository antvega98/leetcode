# https://leetcode.com/problems/power-of-three/submissions/1025193520/

class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n <= 0:
            return False
        return (3**19) % n == 0
