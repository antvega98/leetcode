# https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/1033651031/

class Solution:
    def maxDepth(self, node: Optional[TreeNode]) -> int:
        if node == None:
            return 0
        
        l = self.maxDepth(node.left)
        r = self.maxDepth(node.right)

        print(node.val, "returning:", max(l, r) + 1)
        return max(l, r) + 1
