# https://leetcode.com/problems/most-frequent-even-element/submissions/1061740009/

class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        
        d = {}
        for num in nums:
            if num % 2 == 0:
                d[num] = d.get(num, 0) + 1
        
        res = [-1, -1]
        for key, val in d.items():
            if val > res[1] or (val == res[1] and key < res[0]):
                res[0] = key
                res[1] = val                

        return res[0]
