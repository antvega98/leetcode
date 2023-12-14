

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

function isBalanced(root: TreeNode | null): boolean {
    
    let balanced = true;
    function traverse(node: TreeNode | null) {
        if(node === null) {
            return 0;
        }
        const l = traverse(node.left);
        const r = traverse(node.right);
        if(Math.abs(l - r) > 1){
            balanced = false;
        }
        return Math.max(l, r) + 1;
    }
    traverse(root);
    return balanced;
};

// -----------------------------------------------------

function isBalanced(root: TreeNode | null): boolean {
    return isBalancedAndHeight(root)[0];
};

function isBalancedAndHeight(node: TreeNode | null): [boolean, number]{
    if(node === null){
        return [true, 0];
    }
    const [lIsBalanced, lHeight] = isBalancedAndHeight(node.left);
    const [rIsBalanced, rHright] = isBalancedAndHeight(node.right);

    return [lIsBalanced && rIsBalanced && Math.abs(lHeight - rHright) <= 1, Math.max(lHeight, rHright) + 1];
}
