// https://leetcode.com/problems/find-the-pivot-integer/submissions/1202091074/

function pivotInteger(n: number): number {
    const sum = n * (n + 1) / 2
    const pivot = Math.sqrt(sum);
    return pivot === Math.floor(pivot) ? pivot : -1;
};
