# https://leetcode.com/problems/separate-the-digits-in-an-array/submissions/1020558957/

class Solution:
    def getDigits(self, num):
        while num != 0:
            yield num % 10
            num = num // 10

    def separateDigits(self, nums: List[int]) -> List[int]:
        new_nums = []

        for num in nums:
            d = list(self.getDigits(num))
            while d:
                new_nums.append(d.pop())
        return new_nums
