// https://leetcode.com/problems/is-object-empty/submissions/1031795338/

// Method 1
var isEmpty = (obj) => Object.values(obj).length == 0

// Method 2
var isEmpty = (obj) => {return Object.values(obj).length == 0}

// Method 3
var isEmpty = function(obj) {
    return Object.values(obj).length == 0
};
