# https://leetcode.com/problems/maximum-depth-of-n-ary-tree/submissions/1038005314/

"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if root == None:
            return 0

        longest = 0
        for child in root.children:
            longest = max(longest, self.maxDepth(child))
        
        return longest + 1
        
