# https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/1002097069/

class Solution:
    def balancedStringSplit(self, chars: str) -> int:
        balanced = 0
        count = 0
        for char in chars:
            balanced += 1 if char == 'R' else -1
            count += 1 if balanced == 0 else 0
        return count
