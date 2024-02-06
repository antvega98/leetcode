// https://leetcode.com/problems/merge-strings-alternately/submissions/1168253133/?envType=study-plan-v2&envId=leetcode-75
function mergeAlternately(word1: string, word2: string): string {
    const res = [];
    let i = 0;
    let j = 0;
    while(i < word1.length || j < word2.length){
        if(i < word1.length) res.push(word1[i++]);
        if(j < word2.length) res.push(word2[j++]);
    }
    return res.join('');
};
