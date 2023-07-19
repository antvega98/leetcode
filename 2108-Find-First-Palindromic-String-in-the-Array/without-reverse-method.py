# https://leetcode.com/problems/find-first-palindromic-string-in-the-array/submissions/998602479/

class Solution:
    def isPalindrome(self, word: str) -> bool:
        front = 0
        back = len(word) - 1

        while front < back:
            if word[front] != word[back]:
                return False
            front += 1
            back -= 1
        return True

    def firstPalindrome(self, words: List[str]) -> str:

        fp = ""
        for word in words:
            if self.isPalindrome(word):
                fp = word
                break
        return fp
