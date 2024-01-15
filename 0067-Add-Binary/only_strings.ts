// https://leetcode.com/problems/add-binary/submissions/1146516051/

function addBinary(a: string, b: string): string {
    let aBack = a.length - 1;
    let bBack = b.length - 1;

    let carry = false;
    let res = [];
    while(aBack >= 0 && bBack >= 0){
        let needToCarry = false;
        if(a[aBack] === '1' && b[bBack] === '1'){
            needToCarry = true;
            res.push(carry ? "1" : "0");
        } else if (a[aBack] === '1' || b[bBack] === '1') {
            needToCarry = carry ? true : false;
            res.push(carry ? "0" : "1");
        } else {
            res.push(carry ? "1" : "0");
        }
        carry = needToCarry;
        --aBack;
        --bBack;
    }

    while(aBack >= 0){
        if(a[aBack] === '1' && carry){
            res.push('0');
        } else if (a[aBack] === '0' && carry){
            res.push('1');
            carry = false;
        } else {
            res.push(a[aBack]);
        }
        --aBack;
    }

    while(bBack >= 0){
        if(b[bBack] === '1' && carry){
            res.push('0');
        } else if (b[bBack] === '0' && carry){
            res.push('1');
            carry = false;
        } else {
            res.push(b[bBack]);
        }
        --bBack;
    }

    if(carry){
        res.push('1');
    }
    
    return res.reverse().join("");
};
