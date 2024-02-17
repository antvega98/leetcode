// https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/1177460153/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    if(root == null) return [];

    const res : number[] = [];
    const stack : TreeNode[] = [];

    stack.push(root);
    while(stack.length > 0) {
        const node = stack.pop();
        res.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    
    return res;
};
