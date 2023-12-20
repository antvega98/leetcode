// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/submissions/1124426767/

function minimumRecolors(blocks: string, k: number): number {
    let minChanges = null;
    for(let end = k - 1; end < blocks.length; ++end){
        let start = end - (k - 1);
        let wCount = 0;
        for(let i = start; i <= end; ++i){
            if(blocks.charAt(i) === 'W'){
                ++wCount;
            }
        }    
        if(minChanges === null){
            minChanges = wCount;
        }
        minChanges = Math.min(minChanges, wCount);
    }
    return minChanges;
};
