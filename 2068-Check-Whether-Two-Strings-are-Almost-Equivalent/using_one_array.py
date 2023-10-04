# https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/submissions/1066371485/

class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        d = [0] * 26

        for char in word1:
            d[ord(char) - ord('a')] += 1
        
        for char in word2:
            d[ord(char) - ord('a')] -= 1
        
        for val in d:
            if abs(val) > 3:
                return False

        return True
