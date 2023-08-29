# https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1033601881/

class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if root == None:
            return None
        
        if root.val == val:
            return root

        l = self.searchBST(root.left, val)
        r = self.searchBST(root.right, val)

        if l != None:
            return l
        
        if r != None:
            return r
        
        return None
