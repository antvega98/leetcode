// https://leetcode.com/problems/assign-cookies/submissions/1134053868/?envType=daily-question&envId=2024-01-01

function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b)=> a-b);
    s.sort((a, b)=> a-b);

    let count = 0;
    let g_pointer = 0;
    let s_pointer = 0;
    while(g_pointer < g.length && s_pointer < s.length){
        if(s[s_pointer]>=g[g_pointer]){
            ++count;
            ++g_pointer;            
        }
        ++s_pointer;      
    }
    return count;
};
