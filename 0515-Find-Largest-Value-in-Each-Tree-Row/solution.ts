// https://leetcode.com/problems/find-largest-value-in-each-tree-row/submissions/1177477018/

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

function largestValues(root: TreeNode | null): number[] {
    let processing : TreeNode[] = root ? [root] : [];
    let levels : number[][] = [];
    while(processing.length > 0){
        levels.push(processing.map(node=>node.val));
        processing = processing.flatMap((node)=>[node.left, node.right]).filter(Boolean);
    }
    return levels.map(arr=>Math.max(...arr));
};
