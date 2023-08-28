// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/1033663682/

var maxDepth = function(root) {
    return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
