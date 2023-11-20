//https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/submissions/1102431986/?envType=daily-question&envId=2023-11-20

function garbageCollection(garbage: string[], travel: number[]): number {
    return helper(garbage, travel, 'G') + helper(garbage, travel, 'P') + helper(garbage, travel, 'M')
};

function helper(garbage: string[], travel: number[], c: string): number {
    let loc = 0;
    let minutes = 0;
    for(let i = 0; i < garbage.length; ++i){
        for(const garb of garbage[i]){
            if(garb === c){
                ++minutes;
                loc = i;
            }
        }
    }   

    // travel[x] = house they left
    for(let i = 0; i < loc; ++i){
        minutes += travel[i];
    }
    return minutes;
}
