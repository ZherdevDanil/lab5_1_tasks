function checkBrackets(str) {
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let stack = [];

    for (let char of str) {
        if (brackets[char]) {
            stack.push(brackets[char]);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(checkBrackets("()"));  
console.log(checkBrackets("({})"));  
console.log(checkBrackets("({)}"));  
console.log(checkBrackets("({")); 