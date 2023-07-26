# https://leetcode.com/problems/goal-parser-interpretation/description/

class Solution:
    def interpret(self, command: str) -> str:
        interpreted = ""
        for i in range(len(command)):
            if command[i]== 'G':
                interpreted += "G"
            if command[i] == ')':
                interpreted += "o" if command[i - 1] == '(' else "al"
        return interpreted
