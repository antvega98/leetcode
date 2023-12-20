//  https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/submissions/1124440096/

function minimumRecolors(blocks: string, k: number): number {
    let minChanges = Infinity;
    let wCount = 0;
    for(let end = k - 1, start = 0; end < blocks.length; ++end, ++start){
        // get initial wCount
        if(start === 0){
            for(let i = start; i <= end; ++i){
                if(blocks.charAt(i) === 'W'){
                    ++wCount;
                }
            }
        } else {
            // update wCount
            wCount += blocks[end] === 'W' ? 1 : 0;
            wCount -= blocks[start - 1] === 'W' ? 1 : 0;
        }
        minChanges = Math.min(minChanges, wCount);
    }
    return minChanges;
};
