# https://leetcode.com/problems/number-of-common-factors/submissions/1015173650/

class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        smallest = min(a, b)
        largest = max(a, b)
        count = 0
        for i in range(1, (smallest + 2) // 2):
            if a % i == 0 and b % i == 0:
                count += 1
        return (count + 1 if largest % smallest == 0 else count)
