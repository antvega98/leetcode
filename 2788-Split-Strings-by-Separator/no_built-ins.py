# https://leetcode.com/problems/split-strings-by-separator/submissions/1028111974/

class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        nw = []
        for word in words:
            tmp = ""
            word += separator
            for char in word:
                if char == separator:
                    if tmp != "":
                        nw.append(tmp)
                    tmp = ""
                else:
                    tmp += char
        return nw
