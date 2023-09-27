# https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/1060827604/

class Solution:
    def isVowelString(self, word: str) -> bool:
        vowels = {'a','e','i','o','u'}
        return word[0] in vowels and word[-1] in vowels

    def vowelStrings(self, words: List[str], left: int, right: int) -> int:
        res = 0
        for i in range(left, right + 1):
            if self.isVowelString(words[i]):
                res += 1
        return res
        
