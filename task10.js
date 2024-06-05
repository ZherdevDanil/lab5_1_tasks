function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            if (lastOpeningBracket !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(checkBrackets("function someFn() { return (1 + 2); }")); // true
console.log(checkBrackets("function someFn() { return (1 + 2; }")); // false
console.log(checkBrackets("function someFn() { return [1 + 2]; }")); // true
console.log(checkBrackets("function someFn() { return [1 + 2); }")); // false
console.log(checkBrackets("function someFn() { return {a: 1, b: 2}; }")); // true
console.log(checkBrackets("function someFn() { return {a: 1, b: 2]; }")); // false
