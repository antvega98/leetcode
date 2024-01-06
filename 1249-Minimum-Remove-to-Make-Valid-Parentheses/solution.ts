// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/submissions/1138149338/

function minRemoveToMakeValid(s: string): string {
    let set = new Set();
    let stack = [];
    for(let i = 0; i < s.length; ++i){
        const c = s[i];
        if(c === '('){
            stack.push(i);
        } else if (c === ')'){
            if(stack.length === 0){
                set.add(i);
                continue;
            }
            stack.pop();
        }
    }

    while(stack.length > 0){
        set.add(stack.pop());
    }

    let res = [];
    for(let i = 0; i < s.length; ++i){
        if(!set.has(i)){
            res.push(s[i]);
        }
    }
    return res.join('');
};
