# https://leetcode.com/problems/circular-sentence/submissions/1053728456/

class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        for i in range(len(sentence)):
            if sentence[i] == ' ' and sentence[i-1] != sentence[i+1]:
                return False
        return sentence[0] == sentence[-1]
