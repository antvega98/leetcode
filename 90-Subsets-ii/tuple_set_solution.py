# https://leetcode.com/problems/subsets-ii/description/

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        # Problem: Create subsets. Remove duplicates. 
        # Return the solution in any order

        # We will use a list of tuples.
        nums.sort()
        subsets = set()
        subsets.add(())

        for num in nums:
            subs = set()
            for sub in subsets:
                subs.add(sub)
                subs.add(sub + (num,))
            subsets = subs
        return [list(sub) for sub in subsets]
