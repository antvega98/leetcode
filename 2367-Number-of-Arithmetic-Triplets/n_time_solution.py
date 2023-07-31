# https://leetcode.com/problems/number-of-arithmetic-triplets/description/

class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        num_set = set()
        triplets = 0
        for num in nums:
            if num - diff in num_set and num - (diff * 2) in num_set:
                triplets += 1
            num_set.add(num)
        return triplets
