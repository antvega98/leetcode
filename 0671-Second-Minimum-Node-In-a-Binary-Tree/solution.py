# https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/submissions/1039775936/


import sys
class Solution:


    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:

        first_min = sys.maxsize
        second_min = -1

        def traverse(node):
            if node == None:
                return

            nonlocal first_min, second_min
            if node.val < first_min:
                second_min = first_min
                first_min = node.val
            elif node.val > first_min:
                second_min = second_min if second_min < node.val else node.val
            
            traverse(node.left)
            traverse(node.right)
        
        traverse(root)
        return second_min if second_min != sys.maxsize else -1
