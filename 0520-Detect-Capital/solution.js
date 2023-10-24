// https://leetcode.com/problems/detect-capital/submissions/1082633889/
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word === word.toLowerCase() || word === word.toUpperCase()){
        return true
    }
    return word.slice(1) === word.slice(1).toLowerCase();
};
