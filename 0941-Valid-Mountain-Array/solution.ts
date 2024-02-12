// https://leetcode.com/problems/valid-mountain-array/submissions/1173440606/

function validMountainArray(arr: number[]): boolean {
    if(arr.length <= 2 || arr[0] >= arr[1]) return false;
    let i = 1;
    while(i < arr.length - 1 && arr[i] > arr[i - 1]) ++i;
    while(i < arr.length && arr[i] < arr[i - 1]) ++i;
    return i === arr.length;
};
