# https://leetcode.com/problems/maximum-number-of-pairs-in-array/submissions/1045104725/

class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        d = {}
        for num in nums:
            d[num] = d.get(num, 0) + 1

        pairs = 0
        leftovers = 0
        for val in d.values():
            pairs += (val // 2) if val > 1 else 0
            leftovers += 1 if val % 2 != 0 else 0

        return [pairs, leftovers]
