# https://leetcode.com/problems/evaluate-boolean-binary-tree/submissions/1032801460/

class Solution:
    def printLeafs(self, node) -> bool:
        if node == None or node.val <= 1:
            return node.val == 1
        
        left = self.printLeafs(node.left)
        if (node.val == 2 and left) or (node.val == 3 and not left):
            return left
        
        return self.printLeafs(node.right)

    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        return self.printLeafs(root)
