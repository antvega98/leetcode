# https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/1033652879/

var maxDepth = function(root) {
    if(root == null){
        return 0;
    }

    const l = maxDepth(root.left)
    const r = maxDepth(root.right)

    return Math.max(l, r) + 1
};
