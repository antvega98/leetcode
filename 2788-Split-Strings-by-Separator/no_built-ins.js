// https://leetcode.com/problems/split-strings-by-separator/submissions/1028119033/

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let mw = [];

    for(let i = 0; i < words.length; ++i){
        words[i] = words[i].concat(separator);
        let tmp = "";
        for(let j = 0; j < words[i].length; ++j) {
            if(words[i][j] != separator){
                tmp = tmp.concat(words[i][j]);
            } else {
                if(tmp.length > 0){
                    mw.push(tmp);
                }
                tmp = "";
            }
        }
    }
    return mw;
};
