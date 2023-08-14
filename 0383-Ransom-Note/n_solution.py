# https://leetcode.com/problems/ransom-note/submissions/1021446485/

class Solution:
    def getCharCounts(self, chars: str):
        d = {}
        for char in chars:
            if char not in d:
                d[char] = 0
            d[char] += 1
        return d

    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        m = self.getCharCounts(magazine)

        for char in ransomNote:
            if char not in m:
                return False
            m[char] -= 1
            if m[char] < 0:
                return False
        return True
