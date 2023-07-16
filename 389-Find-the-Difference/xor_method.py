# https://leetcode.com/problems/find-the-difference/description/
# https://leetcode.com/problems/find-the-difference/submissions/995961439/

class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        ans = 0
        for ch in s:
            ans ^= ord(ch)
        for ch in t:
            ans ^= ord(ch)
        return chr(ans)
