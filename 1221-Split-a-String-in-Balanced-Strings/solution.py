# https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/1001390653/

class Solution:
    def balancedStringSplit(self, chars: str) -> int:
        balanced = 0
        count = 0
        for char in chars:
            if char == 'R':
                balanced += 1
            if char == 'L':
                balanced -= 1
            if balanced == 0:
                count += 1
        return count
