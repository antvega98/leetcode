# https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/submissions/1066374607/

class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        d = {}
        for char in word1:
            d[char] = d.get(char, 0) + 1
        for char in word2:
            d[char] = d.get(char, 0) - 1
        for val in d.values():
            if abs(val) > 3:
                return False
        return True
