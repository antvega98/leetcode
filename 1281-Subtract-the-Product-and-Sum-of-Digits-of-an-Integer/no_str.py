# https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/1006542357/

class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        added = 0
        multiplied = 1

        while n != 0:
            added += (n % 10)
            multiplied *= (n % 10)
            n = n // 10
        return multiplied - added
