# https://leetcode.com/problems/binary-gap/submissions/1080292694/

class Solution:
    def binaryGap(self, n: int) -> int:
        m_len = 0
        start = 0
        b = bin(n)[2:]
        for i in range(len(b)):
            if b[i] == '1':
                if i - start > m_len:
                    m_len = i - start
                start = i
                continue
        return m_len
