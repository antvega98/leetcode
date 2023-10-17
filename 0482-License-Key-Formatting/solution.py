# https://leetcode.com/problems/license-key-formatting/submissions/1077185755/

class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        res = []
        counter = 0
        for char in reversed(s):
            if char == '-':
                continue
            if counter == k:
                res.append('-')
                counter = 0
            res.append(char.upper())
            counter += 1
        return "".join(reversed(res))
