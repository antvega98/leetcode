// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/submissions/1176485644/

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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    if(preorder.length === 0) return null;
    if(preorder.length === 1) return new TreeNode(preorder[0]);

    const root = new TreeNode(preorder[0]);

    const indexInPostOrder = getIndexOf(postorder, preorder[1]);

    const leftPreOrder = preorder.slice(1, indexInPostOrder + 2);
    const leftPostOrder = postorder.slice(0, indexInPostOrder + 1)

    const rightPreOrder = preorder.slice(indexInPostOrder + 2);
    const rightPostOrder = postorder.slice(indexInPostOrder + 1, postorder.length - 1);

    root.left = constructFromPrePost(leftPreOrder, leftPostOrder);
    root.right = constructFromPrePost(rightPreOrder, rightPostOrder);

    return root;
};

function getIndexOf(arr:number[] , target: number): number {
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] === target) return i;
    }
    throw new Error("Target not found in array");
}
