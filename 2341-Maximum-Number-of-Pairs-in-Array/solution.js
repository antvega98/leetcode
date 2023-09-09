// https://leetcode.com/problems/maximum-number-of-pairs-in-array/submissions/1045108109/

var numberOfPairs = function(nums) {
    const d = {}

    for(const num of nums){
        d[num] = d[num] == null ? 1 : d[num] + 1
    }

    let pairs = 0
    let leftovers = 0
    for(const [key, value] of Object.entries(d)){
        pairs += value > 1 ? Math.floor(value / 2) : 0
        leftovers += value % 2 != 0 ? 1 : 0
    }
    
    return [pairs, leftovers]
};
