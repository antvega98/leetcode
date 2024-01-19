// https://leetcode.com/problems/optimal-partition-of-string/submissions/1150331359/

function partitionString(s: string): number {
    let set = new Set();
    let count = 1;
    for(const c of s){
        if(set.has(c)){
            set = new Set();
            ++count;
        }
        set.add(c);
    }
    return count;
};
