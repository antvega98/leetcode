# https://leetcode.com/problems/count-pairs-of-similar-strings/submissions/1063484689/

class Solution:
    def getMask(self, word: str) -> int:
        bitmask = 0
        for char in word:
            bitmask |= 1 << (ord(char) - ord('a'))
        return bitmask

    def similarPairs(self, words: List[str]) -> int:
        d = {}
        for word in words:
            mask = self.getMask(word)
            d[mask] = d.get(mask, 0) + 1

        return sum((val*(val-1))//2 for val in d.values())
