// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/submissions/1102427483/

function reductionOperations(nums: number[]): number {
    nums.sort((a, b)=>a - b);
    let prev = nums[0];
    let numOfChanges = 0;
    let res = 0;
    for(let i = 0; i < nums.length; ++i){
      let num = nums[i];
      if(num !== prev){
        numOfChanges ++;
        prev = num;
      }
      res += numOfChanges;
    }
    return res;
};
