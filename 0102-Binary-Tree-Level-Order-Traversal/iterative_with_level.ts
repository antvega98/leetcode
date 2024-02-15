// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/1175637307/

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
    const stack:[TreeNode | null, number][] = [[root, 0]];
    const res = [];
    while(stack.length > 0){
        const [node, level] = stack.pop();
        if(node == null) continue;
        if(level >= res.length) res.push([]);
        res[level].push(node.val);
        stack.push([node.right, level + 1]);
        stack.push([node.left, level + 1]);
    }
    return res;
};
