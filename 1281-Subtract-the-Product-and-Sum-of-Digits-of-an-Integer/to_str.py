# https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        added = 0
        multiplied = 1

        for s in str(n):
            added += int(s)
            multiplied *= int(s)
        
        return multiplied - added
