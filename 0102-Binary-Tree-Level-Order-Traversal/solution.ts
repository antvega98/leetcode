// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/1173775549/

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
    const res = [];
    function implementation(node: TreeNode | null, level: number){
        if(node === null) return;
        if(level>=res.length) res.push([]);
        res[level].push(node.val);
        implementation(node.left, level + 1);
        implementation(node.right, level + 1);
    }
  implementation(root, 0);
  return res;
}

