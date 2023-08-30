# https://leetcode.com/problems/range-sum-of-bst/submissions/1035535079/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        if root == None:
            return 0

        l = self.rangeSumBST(root.left, low, high)
        r = self.rangeSumBST(root.right, low, high)

        return l + r + (root.val if low <= root.val <= high else 0)
