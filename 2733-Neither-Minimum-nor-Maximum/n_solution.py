# https://leetcode.com/problems/neither-minimum-nor-maximum/submissions/1027042098/

class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        max_num = None
        min_num = None
        
        for num in nums:
            if max_num is None or num > max_num:
                max_num = num
            if min_num is None or num < min_num:
                min_num = num                   

        neither = -1
        for num in nums:
            if num != max_num and num != min_num:
                neither = num

        return neither
