// https://leetcode.com/problems/find-maximum-number-of-string-pairs/submissions/1029029425/
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const s = new Set();
    let count = 0;
    for(const word of words){
        if(s.has(word)){
            count += 1;
        }
        s.add(word.split("").reverse().join(""));
    }
    return count;
};
