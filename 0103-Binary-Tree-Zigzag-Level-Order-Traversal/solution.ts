// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/1176226709/

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    // first do level order
    let levels = root ? [root] : [];
    let res = [];
    while(levels.length > 0) {
        res.push(levels.map((node)=>node.val));
        levels = levels.flatMap((root)=>[root.left,root.right]).filter(Boolean);
    }

    res.forEach((level, index)=>{
        level = (index % 2 === 0) ? level : level.reverse();
    });
 
    return res;
};
