// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/submissions/1138131008/

function minAddToMakeValid(s: string): number {
    let opens = 0;
    let invalids = 0;
    for(const c of s){
        if(c === '('){
            ++opens;
        } else {
            if(opens === 0){
                ++invalids;
                continue;
            }
            --opens;
        }
    }
    return opens + invalids;
};
