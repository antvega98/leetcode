// https://leetcode.com/problems/count-vowel-strings-in-ranges/submissions/1143011726/

function vowelStrings(words: string[], queries: number[][]): number[] {
    const prefixes = [0];
    for(const w of words){
        prefixes.push(isVowel(w[0]) && isVowel(w[w.length - 1]) ? 1 : 0)
    }
    for(let i = 1; i < prefixes.length; ++i){
        prefixes[i] += prefixes[i - 1];
    }

    return queries.map(([a,b])=> prefixes[b] - (prefixes[a - 1] ?? 0));
};

function isVowel(s: string): boolean {
    return /[aeiou]/.test(s);
}
