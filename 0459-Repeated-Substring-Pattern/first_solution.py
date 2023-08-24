# https://leetcode.com/problems/repeated-substring-pattern/submissions/1030620522/

class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        front = ""
        back = ""

        f_tmp = ""
        b_tmp = ""

        f = 0 
        b = len(s) - 1

        while f <= b:
            if f_tmp == b_tmp and len(f_tmp) > len(front):
                front = f_tmp
                back = b_tmp
                l = len(s) // len(front)
                if front * l == s:
                    return True
            f_tmp += s[f]
            b_tmp = s[b] + b_tmp

            f += 1
            b -= 1

        if f_tmp == b_tmp and len(f_tmp) > len(front):
            front = f_tmp
            back = b_tmp     
            l = len(s) // len(front)
            if len(front) == len(s):
                return False
            if front * l == s:
                return True                   
        return False
