// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/1175654177/

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

function levelOrder(root: TreeNode | null): number[][] {
    let level = !root ?[]:[root];
    const res = [];
    while(level.length > 0){
        res.push(level.map(node=>node.val));
        level = level.flatMap(node=>[node.left, node.right]).filter(Boolean);
    }
    return res;
};
