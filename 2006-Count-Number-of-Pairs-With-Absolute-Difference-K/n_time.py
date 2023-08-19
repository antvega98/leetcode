# https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1025323378/

class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        d = {}
        count = 0
        for num in nums:
            if num - k in d:
                count += d[num - k]
            if num + k in d:
                count += d[num + k]
            d[num] = d.get(num, 0) + 1
        return count
