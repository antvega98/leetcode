# https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        indices = []

        # storing value and index (to save location)
        for i in range(len(nums)):
            indices.append((i,nums[i]))

        # sorting by value.
        indices.sort(key = lambda x: x[1])
 
        ans = [0] * len(nums)
        prev_tup = None
        greater_than = 0
        
        for cur_tup in indices:
            if not prev_tup or prev_tup[0] != cur_tup[1]:
                # When do I add back: when pre_tup is empty, or if they do not match. 
                ans[cur_tup[0]] = greater_than
                prev_tup = (cur_tup[1], greater_than)
            else:
                # when they are equal, need to save have the same greater_than value as prev.
                ans[cur_tup[0]] = prev_tup[1]
            # want to increase greater_than no matter what value.
            greater_than += 1
          

        return ans
