// https://leetcode.com/problems/valid-palindrome/submissions/1159567072/

function isPalindrome(s: string): boolean {
    let front = 0;
    let back = s.length - 1;
    while(front < back){
        if(!isAlpha(s[front])){
            ++front;
            continue;
        }
        if(!isAlpha(s[back])){
            --back;
            continue;
        }
        if(s[front].toLowerCase() !== s[back].toLowerCase()){
            return false;
        }  
        ++front;
        --back;
    }
    return true;
};

function isAlpha(s: string){
    return /[a-zA-Z0-9]/.test(s);
}
