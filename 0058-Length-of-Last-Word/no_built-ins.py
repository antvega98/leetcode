# https://leetcode.com/problems/length-of-last-word/submissions/1046644675/

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        last_char = len(s) - 1

        while last_char >= 0:
            if s[last_char] != ' ':
                break
            last_char -= 1
        
        space_before_last = last_char 

        while space_before_last >= 0:
            if s[space_before_last] == ' ':
                break
            space_before_last -= 1

        return last_char - space_before_last
