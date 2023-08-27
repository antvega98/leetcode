// https://leetcode.com/problems/evaluate-boolean-binary-tree/submissions/1032837328/

function evaluate(node){
    if(node === null || node.val <= 1){
        return node.val === 1
    }

    const left = evaluate(node.left)
    if((node.val === 2 && left) || (node.val === 3 && !left)){
        return left
    }
    return evaluate(node.right)
}

var evaluateTree = function(root) {
    return evaluate(root)
};
