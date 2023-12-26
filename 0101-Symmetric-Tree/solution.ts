// https://leetcode.com/problems/symmetric-tree/submissions/1128554974/

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

function isSymmetric(root: TreeNode | null): boolean {
    
    function check(node1: TreeNode | null , node2: TreeNode | null): boolean{
        if(node1 === null && node2 === null){
            return true;
        }
        if(node1 === null || node2 === null){
            return false;
        }
        if(node1.val !== node2.val){
            return false;
        }

        return check(node1.left, node2.right) && check(node1.right, node2.left);
    }

    return check(root.left, root.right);
};
