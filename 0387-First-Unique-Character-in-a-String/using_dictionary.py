# https://leetcode.com/problems/first-unique-character-in-a-string/submissions/1028900549/

class Solution:
    def firstUniqChar(self, chars: str) -> int:
        d = {}
        for char in chars:
            d[char] = d.get(char, 0) + 1
        
        for i, char in enumerate(chars):
            if d[char] == 1:
                return i
        return -1
