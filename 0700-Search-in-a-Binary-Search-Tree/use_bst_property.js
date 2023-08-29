// https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1034574321/

var searchBST = function(root, val) {
    if(root == null || root.val === val){
        return root
    }
    return searchBST((root.val < val ? root.right: root.left), val)
};
