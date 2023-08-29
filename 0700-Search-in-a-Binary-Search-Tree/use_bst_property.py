# https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1034571146/

class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if root == None or root.val == val:
            return root
        return self.searchBST(root.left if root.val > val else root.right, val)
