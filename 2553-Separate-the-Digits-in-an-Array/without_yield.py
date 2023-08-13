# https://leetcode.com/problems/separate-the-digits-in-an-array/submissions/1020279538/

class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        new_nums = []

        for num in nums:
            tmp_list = []

            num_copy = num
            while num_copy != 0:
                tmp_list.append(num_copy % 10)
                num_copy = num_copy // 10
            
            for n in tmp_list[::-1]:
                new_nums.append(n)
        return new_nums
