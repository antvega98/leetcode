// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/submissions/1138124419/

function maxDepth(s: string): number {
    let maxDepth = 0;
    let opens = 0;
    for(const c of s){
        if(c === '('){
            ++opens;
        } else if(c === ')'){
            maxDepth = Math.max(maxDepth, opens);
            --opens;
        }
    }
    return maxDepth;
};
