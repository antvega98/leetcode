// https://leetcode.com/problems/largest-substring-between-two-equal-characters/submissions/1134147780/?envType=daily-question&envId=2024-01-01

function maxLengthBetweenEqualCharacters(s: string): number {
    let res = -1;
    const m = new Map<string, number>();
    for(let i = 0; i < s.length; ++i){
        const curChar = s[i];
        if(m.has(curChar)){
            res = Math.max(res, i - m.get(curChar));
            continue;
        }
        m.set(curChar, i + 1);
    }
    return res;
};
