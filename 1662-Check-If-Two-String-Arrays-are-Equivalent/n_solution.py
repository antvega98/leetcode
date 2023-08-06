# https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/submissions/1013867473/

class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
   
        i = 0
        j = 0
        
        k = 0
        l = 0

        while i < len(word1) and k < len(word2):
            if word1[i][j] != word2[k][l]:
                return False
            j += 1
            l += 1
            if j == len(word1[i]):
                j = 0
                i += 1
            if l == len(word2[k]):
                l = 0
                k += 1                
        return i == len(word1) and k == len(word2)
