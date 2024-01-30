// https://leetcode.com/problems/pascals-triangle/submissions/1160612107/

function generate(numRows: number): number[][] {
    const res = [[1]];
    for(let i = 1; i < numRows; ++i) {
        const last = res[res.length - 1];
        const newRow = [1];
        for(let j = 1; j < last.length; ++j){
            newRow.push(last[j - 1] + last[j]);
        }
        newRow.push(1);
        res.push(newRow);
    }
    return res;
};
