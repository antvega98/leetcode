# https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/1000572920/


class Solution:
    def countDigits(self, num: int) -> int:
        return len([ n for n in str(num) if num % int(n) == 0])


class Solution:
    def countDigits(self, num: int) -> int:
        total = 0
        for n in str(num):
            if num % int(n) == 0:
                total += 1
        return total
