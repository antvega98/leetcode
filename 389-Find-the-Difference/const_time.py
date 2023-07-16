# https://leetcode.com/problems/find-the-difference/description/
# https://leetcode.com/problems/find-the-difference/submissions/995949494/

class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        dic = [0] * 26

        for let in s:
            dic[ord(let) - 97] += 1
        
        for let in t:
            dic[ord(let) - 97] -= 1
        
        remaining_value = ""
        for i in range(len(dic)):
            if dic[i] != 0:
                remaining_value = chr(i + 97)
                break
        return remaining_value
